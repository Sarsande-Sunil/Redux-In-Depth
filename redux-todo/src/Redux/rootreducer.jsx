import { counterReducer } from "./reducer";
import { authReducer } from "./reducer";
import { combineReducers } from "redux"


export const allReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
});


// now we combine our all reducer in one file now its time to make store 
