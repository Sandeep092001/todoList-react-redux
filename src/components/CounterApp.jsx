import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../redux/actions/todo";

const CounterApp = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  const Add = () => {
    dispatch(userAction.Increment());
  };

  const Sub = () => {
    dispatch(userAction.Decrement());
  };
  return (
    <div>
      <h2>Counter App</h2>
      <button onClick={Add}>Increment</button>
      <br />
      <h3 className="text-center">{count.counter}</h3>
      <button onClick={Sub}>Decrement</button>
    </div>
  );
};
export default CounterApp;
