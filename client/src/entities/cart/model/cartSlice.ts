import { createSlice } from "@reduxjs/toolkit";
import { Cart } from ".";
import { createCart, deleteCart, getCart, updateCart } from "./cartThunck";

type CartState = {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
};

const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // ------------------- get
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.cart;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // -------------------create
      .addCase(createCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.cart;
      })
      .addCase(createCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // -------------------update
      .addCase(updateCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.cart;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // -------------------delete
      .addCase(deleteCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCart.fulfilled, (state) => {
        state.loading = false;
        state.cart = null;
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export default cartSlice.reducer;
