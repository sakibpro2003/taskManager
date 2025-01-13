import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import taskReducer from "./features/taskSlice/taskSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
