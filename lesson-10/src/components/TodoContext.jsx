import React, { createContext, useReducer, useContext } from "react";

const TodoContext = createContext();
const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index
            ? { ...todo, text: action.payload.newText }
            : todo
        ),
      };
    default:
      return state;
  }
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
