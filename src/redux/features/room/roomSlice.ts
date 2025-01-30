import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface RoomState {}

const initialState: RoomState = {};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    // CONTROLLED:
    // setAccessToken: (state, { payload }: PayloadAction<string>) => {
    //   state.accessToken = payload;
    // },
  },
  extraReducers: (builder) => {
    // builder.addCase(_.pending, (state) => {
    // });
  },
});

export const roomActions = roomSlice.actions;

// Other code such as selectors can use the imported RootState type
export const roomSelector = (state: RootState) => state.room;

export default roomSlice.reducer;
