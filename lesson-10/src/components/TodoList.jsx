import React, { useState } from "react";
import { useTodoContext } from "./TodoContext";
import "./todolist.css";
import { FcCheckmark } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LiaExchangeAltSolid } from "react-icons/lia";

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
              <button onClick={() => handleEditSave(index)}>
                <FcCheckmark />
              </button>
              <button onClick={handleEditCancel}>
                <TiDelete />
              </button>
            </>
          ) : (
            <>
              <IoIosCheckmarkCircleOutline
                style={{ cursor: "pointer" }}
                color={todo.completed ? "red" : "black"}
                size={24}
                onClick={() => handleToggleTodo(index)}
              />
              <span
                style={{
                  marginLeft: "8px",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button
                className="readbutton-read"
                onClick={() => handleEditStart(index, todo.text)}
              >
                <LiaExchangeAltSolid />
              </button>
              <button
                className="readbutton-delete"
                onClick={() => handleDeleteTodo(index)}
              >
                <MdDeleteForever />
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export { AddTodo, TodoList };
