import React from "react";
import { BsPlusLg } from "react-icons/bs";
import './TodoCreateButton.css';

function CreateTodoButton({ openModal, setOpenModal }) {

    const onClickButton = () => {
        setOpenModal(!openModal)
    }
    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        ><BsPlusLg /></button>
    );
}

export { CreateTodoButton };