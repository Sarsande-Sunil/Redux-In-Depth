import { createStore} from "redux";
import { allReducer } from "./rootreducer"

export const store = createStore(
  allReducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// here we create our own store 
