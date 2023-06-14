import todoReducers from "./reducers/todo-reducers";
import { createStore, combineReducers } from "redux";

const rootReducers = combineReducers({ todo: todoReducers });

const store = createStore(rootReducers);

export default store;
