import React from 'react';
import { TodoProvider } from '../Context';
import { AppUI } from './AppUI';


function App() {

  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export default App;
