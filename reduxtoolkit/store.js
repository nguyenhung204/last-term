import { configureStore } from "@reduxjs/toolkit";
import { createReusableSlice } from "./slice.js";

const postsSlice = createReusableSlice({
  name: "test",
  apiUrl: "https://671891927fc4c5ff8f49fcac.mockapi.io/test",
});

export const store = configureStore({
  reducer: {
    test: postsSlice.slice,
  },
});

export const { fetchItems, addItem, updateItem, deleteItem } = postsSlice.actions;
