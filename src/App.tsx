import React from "react";
import TodoAdd  from './components/TodoAdd'
import TodoList from "./components/TodoList";
const App = () => {
  return (
    <div className="container">
      <h1>Mobx - Todos</h1>
      <TodoAdd />
      <TodoList />
    </div>
  );
};

export default App;