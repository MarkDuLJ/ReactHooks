import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";

export default function Color({ id, title, rating, color, onRemove, onRate }) {
  return (
    <div>
      <p>{title}</p>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </div>
  );
}
