import {
  ADD_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
} from './types';

const add = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: todo,
  });
};

const remove = (todo) => (dispatch) => {
  dispatch({
    type: REMOVE_TODO,
    payload: todo
  });
};

const mark = (todo) => (dispatch) => {
  dispatch({
    type: MARK_COMPLETED,
    payload: todo
  });
};

export const addTodo = (todo) => (dispatch) => {
  dispatch(add(todo));
};

export const removeTodo = (todo) => (dispatch) => {
  dispatch(remove(todo));
};

export const markCompleted = (todo) => (dispatch) => {
  dispatch(mark(todo));
};
