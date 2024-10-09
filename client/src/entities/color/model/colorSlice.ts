import { createSlice } from "@reduxjs/toolkit";
import { Color, ColorList } from ".";
import {
  createColor,
  getAllColors,
  getOneColor,
  updateColor,
} from "./colorThunk";

type ColorState = {
  colors: ColorList;
  currColor: Color | null;
  loading: boolean;
  error: string | null;
};

const initialState: ColorState = {
  colors: [],
  currColor: null,
  loading: false,
  error: null,
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllColors.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllColors.fulfilled, (state, action) => {
        state.loading = false;
        state.colors = action.payload.colors;
      })
      .addCase(getAllColors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(getOneColor.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneColor.fulfilled, (state, action) => {
        state.loading = false;
        state.currColor = action.payload.color;
      })
      .addCase(getOneColor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(createColor.pending, (state) => {
        state.loading = true;
      })
      .addCase(createColor.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        
        state.colors.push(...action.payload.colors);
      })
      .addCase(createColor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(updateColor.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateColor.fulfilled, (state, action) => {
        state.loading = false;
        state.colors = state.colors.map((color) =>
          color.id === action.payload.color.id ? action.payload.color : color
        );
      })
      .addCase(updateColor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default colorSlice.reducer;
