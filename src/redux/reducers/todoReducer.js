import { ADD_TODO, TOGGLE_TODO } from "../actions/todoAction";

const initialState = {
  todos: [
    { text: "Meeting at 2", completed: true },
    { text: "Dinner at 9", completed: false },
  ],
};
export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.length, text: action.text, completed: false },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((e, i) => {
          if (action.index === i) {
            e.completed = !e.completed;
          }
          return e;
        }),
      };
    default:
      return state;
  }
}
