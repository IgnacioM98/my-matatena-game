import { combineReducers } from "@reduxjs/toolkit";
import roomSlice from "../features/room/roomSlice";

export const rootReducer = combineReducers({
  room: roomSlice,
});
