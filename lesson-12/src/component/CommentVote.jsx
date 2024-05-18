import React from "react";

export default function CommentVote({ votes }) {
  return (
    <div className="flex flex-col  items-center  space-x-1 bg-gray-100 rounded-md	">
      <button className="text-gray-500 hover:text-gray-900">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 22 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </button>
      <span className="text-sm font-semibold">{votes}</span>
      <button className="text-gray-500 hover:text-gray-900">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 26 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        </span>
      </button>
    </div>
  );
}
