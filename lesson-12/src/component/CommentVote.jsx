import React from "react";

export default function CommentVote() {
  return (
    <div className="flex flex-col justify-between items-center space-x-1">
      <button className="text-gray-500 hover:text-gray-900">
        <span>👍</span>
      </button>
      <span className="text-sm font-semibold">0</span>
      <button className="text-gray-500 hover:text-gray-900">
        <span>👎</span>
      </button>
    </div>
  );
}
