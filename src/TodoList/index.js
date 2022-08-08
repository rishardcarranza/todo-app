import React from "react";
import './TodoList.css'

function TodoList(props) {
    return (
        <section className="TodoList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            
            {(!props.loading && props.totalTodos == 0) && props.onEmptyTodos()}
            {(props.totalTodos > 0 && props.searchedTodos.length == 0) && props.onEmptySearch(props.searchText)}

            {(!props.loading && props.searchedTodos.map(props.render || props.children))}
            
        </section>
    );
}

export { TodoList };