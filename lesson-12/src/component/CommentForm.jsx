import React from "react";

export default function CommentForm({ children, onEdit, onDelete }) {
  return (
    <div className="flex items-center space-x-4 w-screen">
      <div className="flex items-center">
        <div className="flex flex-col justify-between items-center space-x-1">
          <button className="text-gray-500 hover:text-gray-900">
            {/* Иконка лайка */}
            <span>👍</span>
          </button>
          <span className="text-sm font-semibold">0</span>
          <button className="text-gray-500 hover:text-gray-900">
            {/* Иконка дизлайка */}
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
                onClick={onEdit}
                className="text-gray-500 hover:text-gray-900"
              >
                {/* Иконка редактирования */}
                <span>✏️</span>
              </button>
              <button
                onClick={onDelete}
                className="text-gray-500 hover:text-gray-900"
              >
                {/* Иконка удаления */}
                <span>🗑️</span>
              </button>
            </div>
          </div>
        </div>
        <div className="break-words">
          <p className="overflow-wrap break-word w-4/5">{children}</p>
        </div>
      </div>
    </div>
  );
}
