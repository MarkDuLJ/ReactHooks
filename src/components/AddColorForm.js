import React from "react";
import useInput from "../hooks/useInput";

export default function AddColorForm({ onNewColor }) {
  const [title, resetTitle] = useInput("");
  const [color, resetColor] = useInput("#000fff");
  const submit = (e) => {
    e.preventDefault();
    onNewColor(title.value, color.value);
    resetColor();
    resetTitle();
  };
  return (
    <form onSubmit={submit}>
      <input {...title} placeholder="color title" type="text" required />
      <input {...color} type="color" required />

      <button>Add Color</button>
    </form>
  );
}
