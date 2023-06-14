import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  INCREMENT,
  DECREMENT
} from "./action-types";

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

const Increment = () => ({
  type: INCREMENT
});

const Decrement = () => ({
  type: DECREMENT
});
export default { addTodo, deleteTodo, Updatetodo, Increment, Decrement };
