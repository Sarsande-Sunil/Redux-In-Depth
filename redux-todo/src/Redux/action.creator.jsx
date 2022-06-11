import { INCREMENT } from "./action.type"
import { DECREMENT } from "./action.type"
import { RESET } from "./action.type"
import { LOGIN } from "./action.type"
import { LOGOUT } from "./action.type"

export const incerentCounter = () => {
    return {
      type:"INCREMENT",
    };
}

export const decrementCounter = () => {
  return {
    type: "DECREMENT",
  };
};

export const resetCounter = () => {
  return {
    type: "RESET",
  };
};

export const login = () => {
  return {
    type: "LOGIN",
  };
};


export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

// in this page we crete our own action craetor function after we create our 
// reducer 

