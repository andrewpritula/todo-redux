import {
  ADD_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
} from './types';

const initialState = {
  todos: [],
  visibilityFilter: "SHOW_ALL"
};

function todosReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case MARK_COMPLETED:
      return { 
        ...state, 
        todos: state.todos.map(
          (todo) => todo.id === action.payload.id ? {...todo, isCompleted: !action.payload.isCompleted} : todo
        )
      };
    default:
      return state;
  }
}

export default todosReducer;
