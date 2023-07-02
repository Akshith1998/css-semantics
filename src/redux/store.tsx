import { configureStore } from "@reduxjs/toolkit";
import rangeslideReducer from "@/components/rangeSliders/rangesliderSliceReducer";
import buttonSliceReducer from "@/components/Elements/button/buttonSliceReducer";

export const store = configureStore({
  reducer: {
    rangeslideReducer,
    buttonSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
