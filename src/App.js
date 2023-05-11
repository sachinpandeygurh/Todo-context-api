import React ,{Reducer, useReducer} from 'react';
import { Container } from 'reactstrap';

import {TodoContext} from "./context/TodoContext"
import todoReducer from "./context/reducer"
import TodoForm from './component/Todoform';
import Todos from './component/Todos';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  const [todos, dispatch]=useReducer(todoReducer, [])
  return (
    <TodoContext.Provider value={{todos , dispatch}}>
      <Container fluid>
        <h1>TODO App with context API</h1>
        <Todos/>
        <TodoForm/>
      </Container>
      
    </TodoContext.Provider>
    
  );
}

export default App;
