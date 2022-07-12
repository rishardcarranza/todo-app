import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import './TodoCounter.css';

function TodoCounter({total, completed}) {

    return (
        <h2 className="TodoCounter">
            <AiOutlineFileDone className="note-icon" />
            Has completado {completed} de {total} TODOs
        </h2>
    );
}

export { TodoCounter };