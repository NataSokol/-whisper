import { createSlice } from "@reduxjs/toolkit";
import { CategoryList } from ".";
import { getAllCategory } from "./categoryThunk";

type CategoryState = {
  categories: CategoryList;
  loading: boolean;
  error: string | null;
};

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

const UserCategorySlice = createSlice({
  name: "category",
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
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });






      
  },
});

export default UserCategorySlice.reducer;
