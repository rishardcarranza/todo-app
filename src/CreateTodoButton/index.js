import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { TodoContext } from "../Context";
import './TodoCreateButton.css';

function CreateTodoButton() {

    const { openModal, setOpenModal} = React.useContext(TodoContext)

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