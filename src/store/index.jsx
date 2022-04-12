import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./cart-slice";

const store = configureStore({
  reducer: { favourite: favouriteSlice },
});

export default store;
