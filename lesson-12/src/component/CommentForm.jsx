import React, { useState } from "react";
import CommentDelete from "./CommentDelete";

export default function CommentForm({ children, onDelete, onSave }) {
  const [isTextareaOpen, setIsTextareaOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editedText, setEditedText] = useState(children);
  const maxCharacters = 320;

  const toggleTextarea = () => {
    setIsTextareaOpen(!isTextareaOpen);
    setEditedText(children);
  };

  const handleTextChange = (event) => {
    if (event.target.value.length <= maxCharacters) {
      setEditedText(event.target.value);
    }
  };

  const handleSave = () => {
    onSave(editedText);
    setIsTextareaOpen(false);
  };

  return (
    <div className="flex items-center justify-between space-x-4 w-screen  ">
      <div className="flex items-center">
        <div className="flex flex-col justify-between items-center space-x-1">
          <button className="text-gray-500 hover:text-gray-900">
            <span>👍</span>
          </button>
          <span className="text-sm font-semibold">0</span>
          <button className="text-gray-500 hover:text-gray-900">
            <span>👎</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-11/12">
        <div className="flex">
          {/* Здесь может быть аватар пользователя */}
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/office/40/guest-male--v1.png"
            alt="guest-male--v1"
          />
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <h3 className="text-sm font-semibold pl-5">juliusomo</h3>
              <span className="text-xs text-gray-500 pl-4">1 месяц назад</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={toggleTextarea}
                className={`${
                  isTextareaOpen ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={isTextareaOpen}
              >
                <span>✏️</span>
              </button>
              <button
                onClick={() => setIsDeleteDialogOpen(true)}
                className={`${
                  isTextareaOpen ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={isTextareaOpen}
              >
                <span>🗑️</span>
              </button>
            </div>
          </div>
        </div>

        {isTextareaOpen ? (
          <div>
            <textarea
              className="mt-4 block w-full h-40 border border-gray-300 rounded-md px-3 py-2 resize-none"
              value={editedText}
              onChange={handleTextChange}
            ></textarea>
            <div className="text-right text-sm text-gray-500">
              {maxCharacters - editedText.length} символов осталось
            </div>
          </div>
        ) : (
          <div className="break-words">
            <p className="overflow-wrap break-word w-4/5">{children}</p>
          </div>
        )}

        {isTextareaOpen && (
          <div className="flex justify-end mt-2">
            <button
              onClick={handleSave}
              disabled={editedText.trim() === ""}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                editedText.trim() === "" && "opacity-50 cursor-not-allowed"
              }`}
            >
              Сохранить
            </button>
          </div>
        )}
      </div>

      <CommentDelete
        open={isDeleteDialogOpen}
        setOpen={setIsDeleteDialogOpen}
        onDelete={onDelete}
      />
    </div>
  );
}
