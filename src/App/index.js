import React from "react";
import { useTodos } from "./useTodos";
import { GoThumbsup } from "react-icons/go";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from "../TodoLoading";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function App() {

    const {
        error,
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
    } = useTodos();

    return (
        <React.Fragment>
        <TodoHeader>
            <TodoCounter total={totalTodos} completed={completedTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        </TodoHeader>

        <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}

            onError={() => <li className="TodoItem"><p>Hubo un error!</p></li>}
            onLoading={() => new Array(4).fill(1).map((element, i) => <TodoLoading key={i}></TodoLoading>)}
            onEmptyTodos={() => <li className="TodoItem"><p><GoThumbsup /> ¡Hurra! No tienes ninguna tarea por ahora.</p></li>}

            render={todo => (
                    <TodoItem 
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        />
                    )}
        />

        {/* <TodoList>
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
        </TodoList> */}
        
        <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal}/>

        {openModal && (
            <Modal>
                <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}></TodoForm>
            </Modal>
        )}
        </React.Fragment>
    );
}

export { App };