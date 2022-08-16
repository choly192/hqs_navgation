import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/demo/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
