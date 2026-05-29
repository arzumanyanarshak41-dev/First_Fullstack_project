import { createAsyncThunk } from "@reduxjs/toolkit";

export const todosAPI = createAsyncThunk("todos/todosAPI", async () => {
  const url = import.meta.env.VITE_BASE_URL;
  const response = await fetch(url + "/todos");
  const result = await response.json()
  return result
});
