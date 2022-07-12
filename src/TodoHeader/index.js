import React from 'react';
import './TodoHeader.css'

function TodoHeader({ children }) {
    return (
        <header className="TodoHeader">
            {children}
        </header>
    );
}

export { TodoHeader };