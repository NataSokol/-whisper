import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesList } from ".";
import {
  createFavorite,
  deleteFavorite,
  fetchFavorites,
} from "./favoritesThunk";

type FavoritesState = {
  favorites: FavoritesList;
  loading: boolean;
  error: string | null;
};

const initialState: FavoritesState = {
  favorites: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchFavorites.fulfilled,
        (state, action: PayloadAction<FavoritesList>) => {
          state.loading = false;
          state.favorites = action.payload;
        }
      )
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Не удалось загрузить избранные продукты";
      })
      .addCase(createFavorite.pending, (state) => {
        state.loading = true;
      })
      .addCase(createFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites.push(action.payload);
      })
      .addCase(createFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(deleteFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deleteFavorite.fulfilled,
        (state, action: PayloadAction<{ productId: number }>) => {
          state.loading = false;
          state.favorites = state.favorites.filter(
            (favorite) => favorite.productId !== action.payload.productId
          );
        }
      )
      .addCase(deleteFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Не удалось удалить из избранного";
      });
  },
});

export default favoritesSlice.reducer;
