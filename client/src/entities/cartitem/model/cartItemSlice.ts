import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from ".";
import {
  getCartItemById,
  createCartItem,
  updateCartItem,
  deleteCartItem,
} from "./cartItemThunck";

type CartItemState = {
  cartItem: CartItem | null;
  loading: boolean;
  error: string | null;
};

const initialState: CartItemState = {
  cartItem: null,
  loading: false,
  error: null,
};

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // ------------------- get
      .addCase(getCartItemById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartItemById.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItem = action.payload.cartItem;
      })
      .addCase(getCartItemById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // -------------------create
      .addCase(createCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItem = action.payload.cartItem;
      })
      .addCase(createCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // -------------------update
      .addCase(updateCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItem = action.payload.cartItem;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // -------------------delete
      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCartItem.fulfilled, (state) => {
        state.loading = false;
        state.cartItem = null;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export default cartItemSlice.reducer;
