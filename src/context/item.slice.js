import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addToItem: (state, action) => {
      return Object.entries(action.payload).map((key) => ({ ...key[1] }));
      //   const itemExists = state.find((item) => item.id === action.payload.id);
      //   if (itemExists) {
      //     itemExists.quantity++;
      //   } else {
      //     state.push({ ...action.payload, quantity: 1 });
      //   }
    },
    removeFromItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const itemReducer = itemSlice.reducer;

export const { addToItem, removeFromItem } = itemSlice.actions;
