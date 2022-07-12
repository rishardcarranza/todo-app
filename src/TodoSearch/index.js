import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

    const onSearchValue = (event) => {
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input 
            className="TodoSearch"
            placeholder="Escribe para buscar"
            value={searchValue}
            onChange={onSearchValue}
            autoFocus
        />
    );
}

export { TodoSearch };