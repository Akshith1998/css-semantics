import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type sliceState = {
  buttonText: string;
};

const initialState = {
  buttonText: "Button",
} as sliceState;

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    getButtonText: (state, action: PayloadAction<string>) => {
      state.buttonText = action.payload;
    },
  },
});

export const { getButtonText } = buttonSlice.actions;
export default buttonSlice.reducer;
