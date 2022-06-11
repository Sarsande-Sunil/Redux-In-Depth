import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    incerentCounter,
    decrementCounter,
    resetCounter,
    login,
    logout
} from '../Redux/action.creator';

const Counter = (props) => {
    const counter = useSelector((state) => state.counter);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={dispatch(incerentCounter())}>Increment</button>
        <p>0</p>
        <br />
        <button onClick={dispatch(decrementCounter())}>Decrement</button>
        <br />
        <button>Login</button>
        <button>Logout</button>
      </div>
    );
}

export default Counter;