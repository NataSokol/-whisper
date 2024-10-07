import { createSlice } from "@reduxjs/toolkit";
import { ProductSizeList } from ".";
import { deleteProductSize, updateProductSize } from "./productSizeThunk";

type ProductSizeState = {
  productSizes: ProductSizeList;
  loading: boolean;
  error: string | null;
};

const initialState: ProductSizeState = {
  productSizes: [],
  loading: false,
  error: null,
};

const productSizeSlice = createSlice({
  name: "productSize",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProductSize.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProductSize.fulfilled, (state, action) => {
        state.loading = false;
        state.productSizes = state.productSizes.map((size) =>
          size.id === action.payload.id ? action.payload : size
        );
      })
      .addCase(updateProductSize.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(deleteProductSize.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProductSize.fulfilled, (state, action) => {
        state.loading = false;
        state.productSizes = state.productSizes.filter(
          (size) => size.id !== action.meta.arg.id
        );
      })
      .addCase(deleteProductSize.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default productSizeSlice.reducer;
