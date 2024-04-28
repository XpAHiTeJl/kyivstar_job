import React from "react";
import { TodoProvider } from "./components/TodoContext";
import { AddTodo, TodoList } from "./components/TodoList";
import "./App.css";

const App = () => {
  return (
    <TodoProvider>
      <div className="header-img">
        <section className="container">
          <h1>TODO</h1>
          <AddTodo />
          <TodoList />
        </section>
      </div>
    </TodoProvider>
  );
};

export default App;
