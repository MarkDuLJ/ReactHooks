import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ onSelect, selected }) {
  return (
    <div>
      <FaStar onClick={onSelect} color={selected ? "gold" : "gray"} />
    </div>
  );
}
