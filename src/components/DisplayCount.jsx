import React from "react";
import { useSelector } from "react-redux";

export default function DisplayCount() {
  const todos = useSelector((state) => state);
  console.log(todos.todo.length);

  return (
    <div className="card">
      <div className="card-body">
        <h4>Number of Todos: {todos.todo.length}</h4>
      </div>
    </div>
  );
}
