import React from "react";
import useInput from "../hooks/useInput";
import { useColor } from "../hooks/ColorProvider";

export default function AddColorForm({ onNewColor }) {
  const { addColor } = useColor();
  const [title, resetTitle] = useInput("");
  const [color, resetColor] = useInput("#000fff");
  const submit = (e) => {
    e.preventDefault();
    addColor(title.value, color.value);
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
