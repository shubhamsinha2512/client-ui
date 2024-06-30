import { combineReducers } from "@reduxjs/toolkit";
import clientSlice from "./client/client.slice";

export const rootReducer = combineReducers({
  clients: clientSlice,
});
