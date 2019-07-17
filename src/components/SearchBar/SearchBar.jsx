import React, { useState } from 'react';

const SearchBar = props => {
    let [searchValue, setSearchValue] = useState("");

    const onFormSubmit = event =>{
        event.preventDefault();
        props.onSubmit(searchValue);
    }

    return(
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
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