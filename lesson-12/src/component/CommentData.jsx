import React from "react";

const getFormattedDate = (date) => {
  const today = new Date();
  const commentDate = new Date(date);

  const diffTime = today - commentDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "сегодня";
  } else if (diffDays === 1) {
    return "вчера";
  } else if (diffDays <= 6) {
    return `${diffDays} дней назад`;
  } else if (diffDays === 7) {
    return "неделю назад";
  } else {
    return "более недели назад";
  }
};

export default function CommentData({ date }) {
  return (
    <span className="text-xs text-gray-500 pl-4">{getFormattedDate(date)}</span>
  );
}
