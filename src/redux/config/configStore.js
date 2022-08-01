//configStore.js
import { createStore, combineReducers } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({ todos });

// TODO createStore 대신할 것 찾기
const store = createStore(rootReducer);

export default store;
