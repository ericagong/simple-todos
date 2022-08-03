//configStore.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import todos from "../modules/todos";

const logger = createLogger();
const rootReducer = combineReducers({ todos });

// TODO createStore 대신할 것 찾기
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
