import React from "react";
import { useLocalStorage } from './useLocalStorage';


function useTodos() {
    const {
        item: todos,
        saveAndStorageItem: saveAndStorageTodos,
        synchronizedInfo,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []); // Custom Hook
    const [searchValue, setSearchValue] = React.useState(''); // Hooks
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];

    if (searchValue.length > 0) {
        searchedTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
        });
    } else {
        searchedTodos = todos;
    }

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text,
        });
        saveAndStorageTodos(newTodos);
    }
    
    const toggleCompleteTodo = (value) => {
        const todoIndex = todos.findIndex(todo => todo.text === value);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveAndStorageTodos(newTodos);
    }

    const deleteTodo = (value) => {
        const todoIndex = todos.findIndex(todo => todo.text === value);
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1);
        saveAndStorageTodos(newTodos);
    }
    
    return {
        error,
        loading,
        totalTodos,
        completedTodos,
        addTodo,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        synchronizedInfo,
    };
}

export { useTodos };