import React, { useState } from "react";

const CommentReply = ({ setReplies, replies, setReply }) => {
  const [replyText, setReplyText] = useState("");

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const submitReply = () => {
    if (replyText.trim()) {
      setReplies([...replies, replyText]);
      setReplyText("");
      setReply(false);
    }
  };

  const maxCharacters = 320;

  return (
    <div className="mt-4 flex">
      <div className="flex-shrink-0">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/office/40/guest-male--v1.png"
          alt="guest-male--v1"
        />
      </div>
      <div className="w-full">
        <textarea
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="3"
          placeholder="Напишите ваш ответ..."
          value={replyText}
          onChange={handleReplyChange}
          maxLength={maxCharacters}
        ></textarea>
        <div className="text-right text-sm text-gray-500">
          {maxCharacters - replyText.length} символов осталось
        </div>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 ml-4 rounded-lg	 "
          onClick={submitReply}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default CommentReply;
