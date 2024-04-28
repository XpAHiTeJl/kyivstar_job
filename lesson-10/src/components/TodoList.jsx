// // import React from "react";

// // const TodoList = ({ todos, onToggle, onDelete }) => {
// //   return (
// //     <ul>
// //       {todos.map((todo, index) => (
// //         <li key={index}>
// //           <input
// //             type="checkbox"
// //             checked={todo.completed}
// //             onChange={() => onToggle(index)}
// //           />
// //           <span
// //             style={{ textDecoration: todo.completed ? "line-through" : "none" }}
// //           >
// //             {todo.text}
// //           </span>
// //           <button onClick={() => onDelete(index)}>Видалити</button>
// //         </li>
// //       ))}
// //     </ul>
// //   );
// // };

// // export default TodoList;

// import React, { useState } from "react";
// import "./todolist.css";

// const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
//   const [editIndex, setEditIndex] = useState(-1);
//   const [editText, setEditText] = useState("");

//   const handleEditStart = (index, text) => {
//     setEditIndex(index);
//     setEditText(text);
//   };

//   const handleEditSave = (index) => {
//     if (editText.trim() !== "") {
//       onEdit(index, editText.trim());
//       setEditIndex(-1);
//       setEditText("");
//     }
//   };

//   const handleEditCancel = () => {
//     setEditIndex(-1);
//     setEditText("");
//   };

//   return (
//     <ul>
//       {todos.map((todo, index) => (
//         <li key={index}>
//           {editIndex === index ? (
//             <>
//               <input
//                 type="text"
//                 value={editText}
//                 onChange={(e) => setEditText(e.target.value)}
//               />
//               <button onClick={() => handleEditSave(index)}>Зберегти</button>
//               <button onClick={handleEditCancel}>Скасувати</button>
//             </>
//           ) : (
//             <>
//               <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => onToggle(index)}
//               />
//               <span
//                 style={{
//                   textDecoration: todo.completed ? "line-through" : "none",
//                 }}
//               >
//                 {todo.text}
//               </span>
//               <button onClick={() => handleEditStart(index, todo.text)}>
//                 Редагувати
//               </button>
//               <button onClick={() => onDelete(index)}>Видалити</button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

import React, { useState } from "react";
import { useTodoContext } from "./TodoContext";
import "./todolist.css";

const AddTodo = () => {
  const { dispatch } = useTodoContext();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: text.trim() });
      setText("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <input
        className="todo-text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Додати запис..."
      />
    </div>
  );
};

const TodoList = () => {
  const { state, dispatch } = useTodoContext();
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  const handleToggleTodo = (index) => {
    dispatch({ type: "TOGGLE_TODO", payload: index });
  };

  const handleDeleteTodo = (index) => {
    dispatch({ type: "DELETE_TODO", payload: index });
  };

  const handleEditStart = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const handleEditSave = (index) => {
    if (editText.trim() !== "") {
      dispatch({
        type: "EDIT_TODO",
        payload: { index, newText: editText.trim() },
      });
      setEditIndex(-1);
      setEditText("");
    }
  };

  const handleEditCancel = () => {
    setEditIndex(-1);
    setEditText("");
  };

  return (
    <ul>
      {state.todos.map((todo, index) => (
        <li key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleEditSave(index)}>Зберегти</button>
              <button onClick={handleEditCancel}>Скасувати</button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(index)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleEditStart(index, todo.text)}>
                Редагувати
              </button>
              <button onClick={() => handleDeleteTodo(index)}>Видалити</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export { AddTodo, TodoList };
