import { createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "./usersAPI";

export const UsersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(usersAPI.fulfilled, (state, { payload }) => {
       return payload;
    });
  },
});

export const usersReducer = UsersSlice.reducer;
export const usersSelect = (state) => state.users;
export const {} = UsersSlice.actions;
