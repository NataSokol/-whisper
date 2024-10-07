import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductList } from ".";
import { getAllProducts, getProduct } from "./productThunk";

type ProductState = {
    products: ProductList;
    currProduct: Product | null;
    loading: boolean;
    error: string | null;
  };

  const initialState: ProductState = {
    products: [],
    currProduct: null,
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
          state.products = action.payload.products;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something went wrong";
        })
    //! ------------------- getOne
        .addCase(getProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.currProduct = action.payload.product;
        })
        .addCase(getProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Something went wrong";
        })

    }
}) 

export default productSlice.reducer;

