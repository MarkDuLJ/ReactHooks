import "./App.css";
import React from "react";

import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";

function App() {
  return (
    <div className="App">
      <AddColorForm />
      <ColorList />
    </div>
  );
}

export default App;
