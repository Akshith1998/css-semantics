import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type sliceState = {
  padding: number;
  fontSize: number;
  borderRadius: number;
  fontWeight: number;
};

const initialState = {
  padding: 10,
  fontSize: 20,
  borderRadius: 10,
  fontWeight: 300,
} as sliceState;

const rangeSliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    getPadding: (state, action: PayloadAction<number>) => {
      state.padding = action.payload;
    },
    getFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    getBorderRadius: (state, action: PayloadAction<number>) => {
      state.borderRadius = action.payload;
    },
    getFontWeight: (state, action: PayloadAction<number>) => {
      state.fontWeight = action.payload;
    },
  },
});

export const { getPadding, getFontSize, getBorderRadius, getFontWeight } =
  rangeSliderSlice.actions;
export default rangeSliderSlice.reducer;
