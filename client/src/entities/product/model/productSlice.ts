import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductList } from ".";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from "./productThunk";
import { Color } from "@/entities/color";

type ProductState = {
  products: ProductList;
  currProduct: Product | null;
  loading: boolean;
  error: string | null;
  filter: {
    categoryId: number | null;
    subcategoryId: number | null;
  };
};

const initialState: ProductState = {
  products: [],
  currProduct: null,
  loading: false,
  error: null,
  filter: {
    categoryId: null,
    subcategoryId: null,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategoryFilter(state, action: PayloadAction<number | null>) {
      state.filter.categoryId = action.payload;
    },
    addColorToProduct(state, action: PayloadAction<Color>) {
      if (state.currProduct) {
        if (!state.currProduct.Colors) {
          state.currProduct.Colors = [];
        }
        state.currProduct.Colors.push(action.payload);
      }
    },
    setSubcategoryFilter(state, action: PayloadAction<number | null>) {
      state.filter.subcategoryId = action.payload;
    },
  },
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

export const { addColorToProduct } = productSlice.actions;
export const { setCategoryFilter } = productSlice.actions;
export const { setSubcategoryFilter } = productSlice.actions;
export default productSlice.reducer;
