// Action
export const ADD_NOTES = "Add notes";
export const DELETE_NOTES = "Delete notes";

// Action creator

export const addNotes = (text) => ({ text, type: ADD_NOTES });
export const deleteNotes = (index) => ({ index, type: DELETE_NOTES });
