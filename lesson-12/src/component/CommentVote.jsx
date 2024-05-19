import React, { useState } from "react";

export default function CommentVote({ initialVotes, disabled }) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleUpvote = () => {
    if (!disabled) {
      setVotes(votes + 1);
      setHasVoted(true);
    }
  };

  const handleDownvote = () => {
    if (!disabled) {
      setVotes(votes - 1);
      setHasVoted(true);
    }
  };

  return (
    <div className="flex flex-col items-center space-x-1 bg-gray-100 rounded-md">
      <button
        onClick={handleUpvote}
        className="text-gray-500 hover:text-gray-900"
        disabled={hasVoted}
      >
        {/* SVG for upvote */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 22 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <span className="text-sm font-semibold">{votes}</span>
      <button
        onClick={handleDownvote}
        className="text-gray-500 hover:text-gray-900"
        disabled={hasVoted}
      >
        {/* SVG for downvote */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 26 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      </button>
    </div>
  );
}
