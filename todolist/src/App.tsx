import React from "react";
import "./App.css";

function App() {
  let name = "리액트";
  let inlineStyle = {
    padding: "20px",
    backgroundColor: "#698cd2",
  };
  return (
    <div className="container">
      <h1 style={inlineStyle}>
        Hello, {name === "리액트" ? <h1>name</h1> : "Tester"}!{" "}
      </h1>
      <p>반갑습니다!</p>
      {/* jsx, tsx 내부에서 주석 작성하는 법  */}
    </div>
  );
}

export default App;
