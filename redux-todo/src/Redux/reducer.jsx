import { INCREMENT } from "./action.type";
import { DECREMENT } from "./action.type";
import { RESET } from "./action.type";
import { LOGIN } from "./action.type";
import { LOGOUT } from "./action.type";


// reducer fron counter

export const counterReducer = (state = 1, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return state = 1;
        default:
            return state
    }
};

// reducer for logout

export const authReducer = (state = false, action) => {
    switch (action.type) {
        case LOGIN:
            return state = true;
        case LOGOUT:
            return state = false;
        default:
            return state;
    }
};

// now we are crteating our counter we have to add combine reduver


