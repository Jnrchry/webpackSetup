import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// create a store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
