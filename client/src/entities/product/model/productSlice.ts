import { createSlice } from "@reduxjs/toolkit";
import { ProductList } from ".";
import { getAllProducts } from "./productThunk";

type ProductState = {
    collections: ProductList;
    loading: boolean;
    error: string | null;
  };

  const initialState: ProductState = {
    collections: [],
    loading: false,
    error: null,
  };

  const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      //! ------------------- get
        .addCase(getAllProducts.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.collections = action.payload.products;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something went wrong";
        })
    }
}) 

export default productSlice.reducer;