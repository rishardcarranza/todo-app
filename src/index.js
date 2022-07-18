import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './App';
import './index.css';

function App(props) {
    return (
        <h1>{props.saludo}, {props.nombre}!</h1>
    );
}

function withSaludo(WrappedComponent) {
    return function WrappedComponentWithSaludo(saludo) {
        return function ComponentTrue(props) {
            return (
                <React.Fragment>
                    <WrappedComponent {...props} saludo={saludo}/>
                    <p>Estamos acompañando al wrapped component</p>
                </React.Fragment>
            )
        }
    }
}

const AppWithSaludo = withSaludo(App)("Buenas noches");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppWithSaludo nombre="Cesarito" />
    // <App saludo="Buenas" nombre="Rich" />
    // <App/>
);