import { createAsyncThunk } from "@reduxjs/toolkit";
import { FavoritesService } from "../api/index";
import { AxiosError } from "axios";
import { Favorites, FavoritesList } from ".";

type RejectValue = {
  message: string;
};

export const fetchFavorites = createAsyncThunk<
  FavoritesList,
  void,
  { rejectValue: RejectValue }
>("/fetchFavorites", async (_, { rejectWithValue }) => {
  try {
    return await FavoritesService.getFavorites();
  } catch (error) {
    const err = error as AxiosError<{ error: string }>;
    return rejectWithValue({
      message: err.response?.data.error || err.message,
    });
  }
});

export const createFavorite = createAsyncThunk<
  Favorites,
  { productId: number },
  { rejectValue: RejectValue }
>("/createFavorite", async ({ productId }, { rejectWithValue }) => {
  try {
    const response = await FavoritesService.createFavorite(productId);
    return response.favorite;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const deleteFavorite = createAsyncThunk<
  { productId: number },
  { productId: number },
  { rejectValue: RejectValue }
>("/deleteFavorite", async ({ productId }, { rejectWithValue }) => {
  try {
    await FavoritesService.deleteFavorite(productId);
    return { productId };
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
