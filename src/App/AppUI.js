import React from "react";
import { GoThumbsup } from "react-icons/go";
import { TodoContext } from '../Context';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from "../TodoLoading";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {

    const { error, loading,searchedTodos, toggleCompleteTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {error && <li className="TodoItem"><p>Hubo un error!</p></li>}
            {loading && new Array(4).fill(1).map((element, i) => <TodoLoading key={i}></TodoLoading> )}
            {(!loading && searchedTodos.length === 0) && <li className="TodoItem"><p><GoThumbsup /> ¡Hurra! No tienes ninguna tarea por ahora.</p></li>}
            {searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => toggleCompleteTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>
        
        <CreateTodoButton setOpenModal={setOpenModal}/>

        {openModal && (
            <Modal>
                <TodoForm></TodoForm>
            </Modal>
        )}
        </React.Fragment>
    );
}

export { AppUI };