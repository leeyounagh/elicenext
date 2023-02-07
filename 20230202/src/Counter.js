import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Counter = ({ value }) => {
  let [count, setCount] = useState(value);
  const [serverCount, setServerCount] = useState(0);
  useEffect(() => {
    CounterServerSide();
  }, [serverCount]);

  const CounterServerSide = () => {
    // const url = "http://localhost:3000/counter";
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((res) => setServerCount(res.data.value));

    return (
      <div>
        <button
          onClick={() => {
            axios
              .patch("http://localhost:3000/counter", {
                value: serverCount + 1,
              })
              .then((res) => {
                setServerCount((prev) => {
                  return prev + Number(res.data.value);
                });
              });
          }}
        >
          +
        </button>
        {serverCount}
      </div>
    );
  };
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +{count}
      </button>
      <CounterServerSide></CounterServerSide>
    </div>
  );
};

export default Counter;
