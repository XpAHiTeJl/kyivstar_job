// import React, { useState } from "react";
// import AddTodo from "./components/AddTodo";
// import TodoList from "./components/TodoList";

// const App = () => {
//   const [todos, setTodos] = useState([]);

//   const handleAddTodo = (text) => {
//     const newTodo = { text, completed: false };
//     setTodos([...todos, newTodo]);
//   };

//   const handleToggleTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].completed = !updatedTodos[index].completed;
//     setTodos(updatedTodos);
//   };
//   const handleDeleteTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//   };
//   const handleEditTodo = (index, newText) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].text = newText;
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>TODO</h1>
//       <AddTodo onAdd={handleAddTodo} />
//       <TodoList
// todos={todos}
//         onToggle={handleToggleTodo}
//         onDelete={handleDeleteTodo}
//         onEdit={handleEditTodo}
//       />
//     </div>
//   );
// };

// export default App;

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
