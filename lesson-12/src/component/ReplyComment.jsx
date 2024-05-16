import React from "react";

export default function ReplyComment(
  { replyText },
  { handleReplyChange },
  { submitReply }
) {
  return (
    <div>
      <div className="flex-shrink-0">
        {/* Здесь может быть аватар пользователя */}
        <img
          className="h-10 w-10 rounded-full"
          src="/path/to/avatar.jpg"
          alt="Аватар пользователя"
        />
      </div>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        rows="3"
        placeholder="Напишите ваш ответ..."
        value={replyText}
        onChange={handleReplyChange}
      ></textarea>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={submitReply}
      >
        Отправить
      </button>
    </div>
  );
}
