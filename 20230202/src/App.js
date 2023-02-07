import "./App.css";
import Counter from "./Counter";
import Api from "./Api";

function App() {
  return (
    <div>
      <h1 className="title">counter</h1>
      <Counter value={0}></Counter>
      <Api></Api>
    </div>
  );
}

export default App;
