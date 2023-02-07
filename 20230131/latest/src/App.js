import "./App.css";
import React, { useState } from "react";
function Header(props) {
  return <h1>{props.title}</h1>;
}
function Intro() {
  return <div>My Counter is ...</div>;
}
function Counter(props) {
  let count = useState(0);
  function up() {}
  return (
    <>
      <button onClick={up}>+</button>
      {props.value}
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Header title="안녕"></Header>
      <Header title="나는 수연이야"></Header>
      <Intro></Intro>
      <Counter value={10}></Counter>
    </div>
  );
}

export default App;
