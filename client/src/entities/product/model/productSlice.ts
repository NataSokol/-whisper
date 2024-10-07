import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductList } from ".";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from "./productThunk";

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
      .addCase(getOneProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.currProduct = action.payload.product;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })

      //! ------------------- create
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.currProduct = action.payload;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      })

      //! ------------------- update
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.currProduct = action.payload.product;
        state.products = state.products.map((product) =>
          product.id === action.payload.product.id
            ? action.payload.product
            : product
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })

      //! ------------------- delete
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (product) => product.id !== action.meta.arg.id
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default productSlice.reducer;
