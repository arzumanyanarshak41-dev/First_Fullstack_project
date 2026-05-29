import { createSlice } from "@reduxjs/toolkit";
import { todosAPI } from "./todosAPI";

export const TodosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(todosAPI.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const todosReducer = TodosSlice.reducer;
export const todosSelect = (state) => state.todos;
export const {} = TodosSlice.actions;
