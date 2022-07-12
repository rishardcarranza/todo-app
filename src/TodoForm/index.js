import React from "react";
import { BsXCircleFill, BsSave2Fill } from "react-icons/bs";
import './CreateTodoForm.css';


function TodoForm({ addTodo, setOpenModal }) {
    const [ newTodoValue, setNewTodoValue ] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue !== "") {
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Introduce el texto de la Nota" autoFocus/>
            <div className="TodoForm-buttonContainer">
                <button 
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                ><BsXCircleFill /> Cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                ><BsSave2Fill /> Guardar</button>
            </div>
        </form>
    );
}

export { TodoForm };