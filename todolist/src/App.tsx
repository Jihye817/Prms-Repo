import React from "react";
import "./App.css";
import TodoList from "./TodoList.tsx";
import Clock from "./Timer.tsx";

function App() {
  return (
    <div className="container">
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );
}

export default App;
