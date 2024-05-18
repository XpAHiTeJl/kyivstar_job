import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentVote from "./CommentVote";

const CommentTwoPerson = ({ username }) => {
  const [reply, setReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState([]);

  const handleReplyClick = () => {
    setReply(!reply);
  };

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
  const handleDelete = (index) => {
    const newReplies = replies.filter((_, i) => i !== index);
    setReplies(newReplies);
  };
  const handleSaveEditedText = (editedText, index) => {
    const updatedReplies = [...replies];
    updatedReplies[index] = editedText;
    setReplies(updatedReplies);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4 w-3/5">
      <div className="flex items-center space-x-4  ">
        {username !== "amyrobson" && <CommentVote></CommentVote>}
        <div className="flex-shrink-0">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/guest-male--v1.png"
            alt="guest-male--v1"
          />
        </div>
        <div className="flex-1	">
          <div className="flex justify-between">
            <div className="flex items-center ">
              <h3 className="text-sm font-semibold">maxblagun</h3>
              <span className="text-xs text-gray-500 pl-4">1 месяц назад</span>
            </div>
            <div>
              <button
                className=" hover:text-current	 text-indigo-500 font-bold py-2 px-4 	 inline-flex items-center"
                onClick={handleReplyClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                  />
                </svg>
                <span>Ответить</span>
                {/* Иконка ответа */}
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-1">
            Ого, ваш проект выглядит потрясающе! Как долго вы кодируете? Я все
            еще новичок, но думаю, что тоже хочу скоро погрузиться в React.
            Возможно, вы подскажете мне, где я могу изучить React? Спасибо!
          </p>
        </div>
      </div>

      {reply && (
        <div className="mt-4 flex ">
          {/* Форма для ответа на комментарий */}
          <div className="flex-shrink-0">
            {/* Здесь может быть аватар пользователя */}
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/office/40/guest-male--v1.png"
              alt="guest-male--v1"
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
      )}
      <div className="space-y-5 w-4/5	  ">
        {replies.map((reply, index) => (
          <div key={index} className="flex bg-gray-100 p-3 rounded 	  ">
            <CommentForm
              onDelete={() => handleDelete(index)}
              onSave={(editedText) => handleSaveEditedText(editedText, index)}
            >
              {reply}
            </CommentForm>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentTwoPerson;
