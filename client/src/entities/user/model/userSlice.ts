import { createSlice } from "@reduxjs/toolkit";
import { User } from ".";
import {
  refreshAccessToken,
  signIn,
  signUp,
  logout,
  forget,
  infoUpdate,
  fetchLikedProducts,
  likeProduct,
  unlikeProduct,
} from "./userThunks";
import { message } from "antd";

type UserState = {
  user: User | null;
  error: string | null;
  loading: boolean;
};

const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })

      .addCase(refreshAccessToken.rejected, (state) => {
        state.loading = false;
      })
      //!----------------------------------------------------------------
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to sign in";
        message.warning(action.payload?.message || "Failed to sign in");
      })

      //!----------------------------------------------------------------
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to sign up";
        message.error(action.payload?.message || "Failed to sign up");
      })

      //!----------------------------------------------------------------
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to logout";
        message.error(action.payload?.message || "Failed to logout");
      })
      //!----------------------------------------------------------------
      .addCase(forget.pending, (state) => {
        state.loading = true;
      })
      .addCase(forget.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(forget.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to sign in";
        message.warning(action.payload?.message || "Failed to sign in");
      })
      //!----------------------------------------------------------------
      .addCase(infoUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(infoUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(infoUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to sign in";
        message.warning(action.payload?.message || "Failed to sign in");
      })
      //!----------------------------------------------------------------
      .addCase(likeProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(likeProduct.fulfilled, (state, action) => {
        state.loading = false;
        if (state.user) {
          state.user.LikedProducts.push(action.payload.product);
        }
        message.success(action.payload.message);
      })
      .addCase(likeProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Не удалось поставить лайк";
        message.error(action.payload?.message || "Не удалось поставить лайк");
      })

      .addCase(unlikeProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(unlikeProduct.fulfilled, (state, action) => {
        state.loading = false;
        if (state.user) {
          state.user.LikedProducts = state.user.LikedProducts.filter(
            (product) => product.id !== action.meta.arg.productId
          );
        }
        message.success(action.payload.message);
      })
      .addCase(unlikeProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Не удалось убрать лайк";
        message.error(action.payload?.message || "Не удалось убрать лайк");
      })

      .addCase(fetchLikedProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLikedProducts.fulfilled, (state, action) => {
        state.loading = false;
        if (state.user) {
          state.user.LikedProducts = action.payload.likedProducts;
        }
        state.error = null;
      })
      .addCase(fetchLikedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Не удалось загрузить лайки";
        message.error(action.payload?.message || "Не удалось загрузить лайки");
      });
  },
});

export default userSlice.reducer;
