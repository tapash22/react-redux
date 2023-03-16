import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducers from "./store/reducers/TodosReducer";
// import countReducer from "./store/reducers/CounterReducer";

const Store = createStore(todosReducers, applyMiddleware(thunk));

export default Store;