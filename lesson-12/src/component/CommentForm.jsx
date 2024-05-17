import React, { useState } from "react";
import CommentDelete from "./CommentDelete";

export default function CommentForm({ children, onDelete, onSave }) {
  const [isTextareaOpen, setIsTextareaOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editedText, setEditedText] = useState(children);

  const toggleTextarea = () => {
    setIsTextareaOpen(!isTextareaOpen);
    setEditedText(children);
  };

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleSave = () => {
    onSave(editedText);
    setIsTextareaOpen(false);
  };

  return (
    <div className="flex items-center space-x-4 w-screen">
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
            className="h-10 w-10 rounded-full"
            src="/path/to/avatar.jpg"
            alt="Аватар пользователя"
          />
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <h3 className="text-sm font-semibold pl-5">NewPerson</h3>
              <span className="text-xs text-gray-500 pl-4">1 месяц назад</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={toggleTextarea}
                className="text-gray-500 hover:text-gray-900"
              >
                <span>✏️</span>
              </button>
              <button
                onClick={() => setIsDeleteDialogOpen(true)}
                className="text-gray-500 hover:text-gray-900"
              >
                <span>🗑️</span>
              </button>
            </div>
          </div>
        </div>

        {isTextareaOpen ? (
          <textarea
            className="mt-4 block w-full h-40 border border-gray-300 rounded-md px-3 py-2 resize-none"
            value={editedText}
            onChange={handleTextChange}
          ></textarea>
        ) : (
          <div className="break-words">
            <p className="overflow-wrap break-word w-4/5">{children}</p>
          </div>
        )}

        {isTextareaOpen && (
          <div className="flex justify-end mt-2">
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
