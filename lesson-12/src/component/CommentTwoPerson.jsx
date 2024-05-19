import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentVote from "./CommentVote";
import CommentReply from "./CommentReply";
import CommentThree from "./CommentThree";

const CommentTwoPerson = ({ username }) => {
  const [reply, setReply] = useState(false);
  const [replies, setReplies] = useState([]);

  const handleReplyClick = () => {
    setReply(!reply);
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
    <div className="bg-white p-4 rounded-lg shadow space-y-4 w-6/12 m-5	">
      <div className="flex items-center space-x-4 ">
        <div className="flex items-center">
          <CommentVote initialVotes={5} />
        </div>
        <div className="flex-shrink-0">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/user-male-circle--v1.png"
            alt="user-male-circle--v1"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex items-center">
              <h3 className="text-sm font-semibold">maxblagun</h3>
              <span className="text-xs text-gray-500 pl-4">2 недели назад</span>
            </div>
            <div>
              <button
                className="hover:text-current text-indigo-500 font-bold py-2 px-4 inline-flex items-center"
                onClick={handleReplyClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15l-6-6m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
                <span>Ответить</span>
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Впечатляет! Хотя функция перетаскивания могла бы быть улучшена. Но в
            целом выглядит невероятно. Вы точно попали в дизайн, и отзывчивость
            на различных точках останова работает очень хорошо.
          </p>
        </div>
      </div>

      {reply && (
        <CommentReply
          setReplies={setReplies}
          replies={replies}
          setReply={setReply}
        />
      )}
      <div className="space-y-5 w-4/5 ml-auto">
        {replies.map((reply, index) => (
          <div key={index} className="flex bg-gray-100 p-3 rounded-xl">
            <CommentForm
              onDelete={() => handleDelete(index)}
              onSave={(editedText) => handleSaveEditedText(editedText, index)}
            >
              {reply}
            </CommentForm>
          </div>
        ))}
      </div>
      <CommentThree />
    </div>
  );
};

export default CommentTwoPerson;
