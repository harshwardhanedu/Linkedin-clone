import { combineReducers } from "redux";
import userReducer from  "./userReduser" ;

const rootReducer = combineReducers({
    userState: userReducer,
});

export default rootReducer;