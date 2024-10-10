import { createSlice } from "@reduxjs/toolkit";
import { Cart } from ".";
import { deleteCart, getCart, updateCart } from "./cartThunck";
import {
  createCartItem,
  deleteCartItem,
  updateCartItem,
} from "@/entities/cartitem";
import { signIn, signUp } from "@/entities/user";

type CartState = {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
  cartCount: number;
};

const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {},
  //{
  // setCartCount: (state) => { state ++
  // }
  // },
  extraReducers: (builder) => {
    builder
      // ------------------- get
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.cart;
        state.cartCount = action.payload.cart?.CartItems?.map(
          (item) => item.quantity
        ).reduce((a, b) => a + b, 0);
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      //!-----------------------get cart from user----------------------------
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.cart;
        state.error = null;
        state.cartCount = action.payload.cart!.CartItems?.map(
          (item) => item.quantity
        ).reduce((a, b) => a + b, 0);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to sign in";
      })

      //!---------------------create cart with user-----------------------
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload.cart;
        state.error = null;
        state.cartCount = action.payload.cart!.CartItems?.map(
          (item) => item.quantity
        ).reduce((a, b) => a + b, 0);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to sign up";
      })
      // -------------------create
      // .addCase(createCart.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(createCart.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.cart = action.payload.cart;
      // })
      // .addCase(createCart.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message || "Something went wrong";
      // })
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
        state.cartCount = 0;
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })

      // ------------------- get cartItem
      // .addCase(getCartItemById.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(getCartItemById.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.cart?.CartItems = action.payload.cartItem;
      // })
      // .addCase(getCartItemById.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message || "Something went wrong";
      // })
      // -------------------create cartItem
      .addCase(createCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cart?.CartItems.push(action.payload.cartItem);
        state.cartCount += 1;
      })
      .addCase(createCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // -------------------update cartItem
      .addCase(updateCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cart?.CartItems.map((item) =>
          item.id === action.payload.cartItem.id
            ? action.payload.cartItem
            : item
        );
        state.cartCount = state
          .cart!.CartItems?.map((item) =>
            item.id === action.payload.cartItem.id
              ? action.payload.cartItem
              : item
          )
          .map((item) => item.quantity)
          .reduce((a, b) => a + b);
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // -------------------delete cartItem
      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cart?.CartItems.filter(
          (cartItem) => cartItem.id !== action.meta.arg.id
        );
        state.cartCount -= action.payload.cartItem.quantity;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export default cartSlice.reducer;
