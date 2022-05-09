import React from "react";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import './TodoItem.css'

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <span
                className={`Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            ><BsCheckLg /></span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span
                className="Icon-delete"
                onClick={props.onDelete}
            ><BsXLg /></span>
        </li>
    );
}

export { TodoItem };