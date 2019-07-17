import React from 'react';
import SearchBar from '../../components/SearchBar';


const PicDashboard = () => {

    const onSearchSubmit = searchValue =>{
        console.log(searchValue);
    }

    return(
        <div className="ui container" style={{marginTop: '20px'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
        </div>
    );
}

export default PicDashboard;
