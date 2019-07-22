import React, { useState } from 'react';

const SearchBar = props => {
    let [searchValue, setSearchValue] = useState("");

    const onFormSubmit = event =>{
        event.preventDefault();
        if(searchValue !== null && searchValue.length > 0 ){
            props.onSubmit(searchValue);
        }
        else{
            console.log("Search term cannot be empty");
        }
    }

    return(
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Search Term</label>
                    <input
                        type="text" 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );

}

export default SearchBar;