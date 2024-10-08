import { createSlice } from "@reduxjs/toolkit";
import { SubcategoryList } from ".";
import { createSubcategory, deleteSubcategory, getAllSubcategories, updateSubcategory } from "./subcategoryThunk"

type SubcategoryState = {
    subcategories: SubcategoryList;
    loading: boolean;
    error: string | null;
  };

  const initialState: SubcategoryState = {
    subcategories: [],
    loading: false,
    error: null,
  };

  const subcategorySlice = createSlice({
    name: "subcategory",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      //! ------------------- get
        .addCase(getAllSubcategories.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllSubcategories.fulfilled, (state, action) => {
          state.loading = false;
          state.subcategories = action.payload.subcategories;
        })
        .addCase(getAllSubcategories.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something went wrong";
        })
        //! ------------------- create 
        .addCase(createSubcategory.pending, (state) => {
          state.loading = true;
        })
        .addCase(createSubcategory.fulfilled, (state, action) => {
          state.loading = false;
          state.subcategories.push(action.payload.subcategory);
        })
        .addCase(createSubcategory.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something went wrong";
        })
        //! ------------------- update
        .addCase(updateSubcategory.pending, (state) => {
          state.loading = true;
        })
        .addCase(updateSubcategory.fulfilled, (state, action) => {
          state.loading = false;
          state.subcategories = state.subcategories.map((subcategory) =>
            subcategory.id === action.payload.subcategory.id
              ? action.payload.subcategory
              : subcategory
          );
        })
        .addCase(updateSubcategory.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something went wrong";
        })
        //! ------------------- delete
        .addCase(deleteSubcategory.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteSubcategory.fulfilled, (state, action) => {
          state.loading = false;
          state.subcategories = state.subcategories.filter(
            (subcategory) => subcategory.id !== action.meta.arg.id
          );
        })
        .addCase(deleteSubcategory.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something went wrong";
        })
    },
  });   

  export default subcategorySlice.reducer;