import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label htmlFor="search">Search Video</label>
                    <input type="text" id="search" value={value} placeholder="Search..." onChange={ e => setValue(e.target.value)}/>
                </div>
            </form>
        </div>
    );
}

export default SearchBar
