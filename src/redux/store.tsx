import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chess from "./slice/chess";

const rootReducer = combineReducers({
  chess: chess,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
