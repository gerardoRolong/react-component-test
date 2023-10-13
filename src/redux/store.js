import { configureStore } from "@reduxjs/toolkit";
import websitesInfoReducer from "./websitesInfoSlice.js"

export const store = configureStore({
  reducer: {
    websitesInfo: websitesInfoReducer,
  }
})