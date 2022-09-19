import React from 'react';
import './App.css';
import AddTodos from './components/AddTodos';
import TodoList from './components/TodoList';

function App() {
  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <AddTodos />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
