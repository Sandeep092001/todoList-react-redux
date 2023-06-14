import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-types";

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

const Updatetodo = (todo, id) => ({
  type: UPDATE_TODO,
  payload: { todo: todo, todoId: id }
});

export default { addTodo, deleteTodo, Updatetodo };
