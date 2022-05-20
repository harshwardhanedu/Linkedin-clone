// import { legacy_createStore as createStore } from "redux";
import { legacy_createStore, applyMiddleware } from "redux"; //used legacy_createStore  insted of createStore
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;


