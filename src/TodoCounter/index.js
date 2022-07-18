import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import './TodoCounter.css';

function TodoCounter({total, completed, loading}) {

    return (
        <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
            <AiOutlineFileDone className="note-icon" />
            Has completado {completed} de {total} TODOs
        </h2>
    );
}

export { TodoCounter };