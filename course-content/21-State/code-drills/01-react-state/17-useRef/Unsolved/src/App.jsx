// TODO: add comments
import { useReducer, useRef } from "react";
import "./App.css";

function Count() {
  // TODO: add comments
  const inputRef = useRef();

  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "subtract":
        return state - 1;
      case "change":
        // TODO: add comments
        let val = inputRef.current.value;
        if (val === '' || typeof val !== 'string') {
          val = '0'; 
        }
        return parseInt(val, 10); 
      default:
        return state;
    }
  }, 0);

  return (
    <div className="App">
      <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch("add")}>
        Add
      </button>
      <div>{count}</div>
      <button className="btn btn-danger mt-5" onClick={() => dispatch("subtract")}>
        Subtract
      </button>
       {/* TODO: add comments */}
      <input
        className="form-control w-25 mx-auto mt-5"
        placeholder="Type new value..."
        ref={inputRef}
      />
      <button className="btn btn-warning mt-5" onClick={() => dispatch("change")}>
        Change
      </button>
    </div>
  );
}

export default Count;