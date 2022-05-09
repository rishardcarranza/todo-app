import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { TodoContext } from "../Context";
import './TodoCounter.css';

function TodoCounter() {

    const { totalTodos: total, completedTodos: completed } = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">
            <AiOutlineFileDone className="note-icon" />
            Has completado {completed} de {total} TODOs
        </h2>
    );
}

export { TodoCounter };