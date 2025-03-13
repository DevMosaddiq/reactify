import React, { useReducer, useState } from "react";
import { reducer } from "./counterReeducer";

const Counter = () => {
  const [inputVal, setInputVal] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 5 });

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <input
        type="number"
        onChange={handleChange}
        value={inputVal}
        placeholder="Enter The number you want to increase the count..."
      />

      <button
        onClick={() => {
          dispatch({ type: "increase", payload: Number(inputVal) });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrease", payload: Number(inputVal) });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        o
      </button>
    </div>
  );
};

export default Counter;
