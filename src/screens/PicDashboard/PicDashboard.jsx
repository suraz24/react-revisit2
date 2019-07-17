import React, {useState} from 'react';

import SearchBar from '../../components/SearchBar';
import ImageList from '../../components/ImageList';
import unsplash from '../../api/unsplash';



const PicDashboard = () => {

    let [images, setImages] = useState([]);

    const onSearchSubmit = async searchValue =>{
        if(searchValue !== null && searchValue.length > 0 ){
            const response = await unsplash.get('/search/photos', {
               params: { query: searchValue },
            });
        setImages(response.data.results)  
        }
        else{
            console.log("Search term cannot be empty");
        }
    }

    return(
        <div className="ui container" style={{marginTop: '20px'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
            <ImageList images = {images} />  
        </div>
    );
}

export default PicDashboard;
