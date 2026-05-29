import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./UsersSlice/UsersSlice";
import { todosReducer } from "./TodosSlice/TodosSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer,
  },
});
