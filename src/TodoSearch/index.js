import React from "react";
import { TodoContext } from "../Context";
import './TodoSearch.css';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

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