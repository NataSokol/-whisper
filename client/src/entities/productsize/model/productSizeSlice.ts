import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ProductSize,
  ProductSizeList,
  ProductSizeListResponse,
  ProductSizeResponse,
} from ".";
import {
  createProductSize,
  deleteProductSize,
  getAllProductSizes,
  updateProductSize,
} from "./productSizeThunk";

type ProductSizeState = {
  productSizes: ProductSizeList;
  productSize: ProductSize | null;
  loading: boolean;
  error: string | null;
};

const initialState: ProductSizeState = {
  productSizes: [],
  productSize: null,
  loading: false,
  error: null,
};

const productSizeSlice = createSlice({
  name: "productSize",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductSizes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllProductSizes.fulfilled,
        (state, action: { payload: ProductSizeListResponse }) => {
          state.loading = false;
          state.productSizes = action.payload.productSizes;
        }
      )
      .addCase(getAllProductSizes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      })

      .addCase(createProductSize.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createProductSize.fulfilled,
        (state, action: { payload: ProductSizeResponse }) => {
          state.loading = false;
          state.productSizes.push(action.payload.productSize);
        }
      )
      .addCase(createProductSize.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      })

      // Обновление размера
      .addCase(updateProductSize.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateProductSize.fulfilled,
        (state, action: PayloadAction<ProductSizeResponse>) => {
          state.loading = false;
          if (action.payload) {
            const index = state.productSizes.findIndex(
              (size) => size.id === action.payload.productSize.id
            );
            if (index !== -1) {
              state.productSizes[index] = action.payload.productSize;
            }
          }
        }
      )
      .addCase(updateProductSize.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      })

      // Удаление размера
      .addCase(deleteProductSize.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProductSize.fulfilled, (state, action) => {
        state.loading = false;
        state.productSizes = state.productSizes.filter(
          (size) => size.id !== action.meta.arg.id
        );
      })
      .addCase(deleteProductSize.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      });
  },
});

export default productSizeSlice.reducer;

