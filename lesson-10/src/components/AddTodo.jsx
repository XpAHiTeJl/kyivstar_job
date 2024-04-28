// import React, { useState } from "react";
// import "./addtodo.css";

// const AddTodo = ({ onAdd }) => {
//   const [text, setText] = useState("");

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && text.trim() !== "") {
//       onAdd(text.trim());
//       setText("");
//     }
//   };

//   return (
//     <input
//       type="text"
//       placeholder="Додати запис..."
//       value={text}
//       onChange={(e) => setText(e.target.value)}
//       onKeyPress={handleKeyPress}
//     />
//   );
// };

// export default AddTodo;
