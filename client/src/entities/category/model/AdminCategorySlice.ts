import { createSlice } from "@reduxjs/toolkit";
import { CategoryList } from ".";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "./categoryThunk";

type AdminCategoryState = {
  categories: CategoryList;
  loading: boolean;
  error: string | null;
};

const initialState: AdminCategoryState = {
  categories: [],
  loading: false,
  error: null,
};

const adminCategorySlice = createSlice({
  name: "adminCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.categories;
        state.error = null;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.map((category) =>
          category.id === action.payload.id ? action.payload : category
        );
        state.error = null;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter(
          (category) => category.id !== action.meta.arg.id
        );
        state.error = null;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default adminCategorySlice.reducer;
