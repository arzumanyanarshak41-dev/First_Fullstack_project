import { createAsyncThunk } from "@reduxjs/toolkit";

export const usersAPI = createAsyncThunk("users/usersAPI", async () => {
  const url = import.meta.env.VITE_BASE_URL;
  const response = await fetch(url + "/users");
  const result = await response.json();
  return result;
});
