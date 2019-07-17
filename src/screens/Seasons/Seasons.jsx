import React, { useState, useEffect } from 'react';
import SeasonDisplay from '../../components/SeasonDisplay';

import Spinner from '../../components/Spinner';

const Seasons = () => {
    let [ position, setPosition ] = useState({lat: null, long: null});
    let [errMsg, setErrMsg] = useState("");
    let [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
       console.log("Component Did Mount")
       if(position.lat === null) 
            getUserGeoLocation();
       return () => {
           console.log("Component Did Unmount");
       }
    }, [position])

    const getUserGeoLocation = () => {
        setIsLoading(true);
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                console.log(pos);
                setIsLoading(false);
                setPosition({lat: pos.coords.latitude, long: pos.coords.longitude});
            },
            (err) => {
                setIsLoading(false);
                setErrMsg(err.message);
                console.log(err) 
            }
        );

    }
    
    const displayContent = errMsg !== "" 
                            ? <h1>Error: {errMsg}</h1>
                            : <SeasonDisplay lat={position.lat}/>  

    return (
            <div>
                { isLoading ? <Spinner message="Please accept location request" /> : displayContent}
            </div>
    );

}

export default Seasons;