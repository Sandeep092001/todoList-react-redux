import todoReducers from "./reducers/todo-reducers";
import Counter from "./reducers/counter";
import { createStore, combineReducers } from "redux";

const rootReducers = combineReducers({ todo: todoReducers, counter: Counter });

const store = createStore(rootReducers);

export default store;
