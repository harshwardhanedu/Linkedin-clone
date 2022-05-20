// import { legacy_createStore as createStore } from "redux";
import { legacy_createStore, applyMiddleware } from "redux"; //used legacy_createStore  insted of createStore

import rootReducer from "../reducers";

const store = legacy_createStore(rootReducer, {});

export default store;


