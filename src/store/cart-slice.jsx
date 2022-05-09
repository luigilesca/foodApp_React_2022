import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    items: localStorage.getItem("favourite") ? JSON.parse(localStorage.getItem("favourite")) : [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToFavourite(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      state.items.find((item) => item.id === newItem.id);

      state.items = state.items.filter((item) => item.id !== newItem.id);
      state.totalQuantity++;

      state.items.push({
        id: newItem.id,
        title: newItem.title,
        quantity: 1,
        image: newItem.image,
        summary: newItem.summary,
        instructions: newItem.instruction,
      });
      localStorage.setItem("favourite", JSON.stringify(state.items));
    },
    removeItemToFavourite(state, action) {
      const id = action.payload;
      console.log(id);
      state.totalQuantity--;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("favourite", JSON.stringify(state.items));
    },
  },
});

export const { addItemToFavourite, removeItemToFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
