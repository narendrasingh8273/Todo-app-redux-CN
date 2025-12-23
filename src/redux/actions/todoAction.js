//Action
export const ADD_TODO = "Add to do";
export const TOGGLE_TODO = "Toggle todo";

// Action Creators

export const addToDo = (text) => ({ text, type: ADD_TODO });
export const toggleToDo = (index) => ({ index, type: TOGGLE_TODO });
