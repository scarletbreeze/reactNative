import {
  ADD_TODO,
  TOGGLE_TODO,
  ADD_PLACE,
  DELETE_PLACE,
  ENTER_PLACE,
} from './actionTypes';

let nextId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextId++,
  text,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

// room
let placeId = 0;
export const addPlace = placeName => ({
  type: ADD_PLACE,
  id: placeId++,
  payload: placeName,
});

export const deletePlace = id => ({
  type: DELETE_PLACE,
  id: roomId--,
});

export const enterPlace = id => ({});
