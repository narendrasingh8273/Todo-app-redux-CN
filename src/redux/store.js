// const redux = require("redux");

import * as redux from "redux";
import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { notesReducer } from "./reducers/notesReducer";

const result = combineReducers({
  todoReducer,
  notesReducer,
});

export const store = redux.createStore(result);
