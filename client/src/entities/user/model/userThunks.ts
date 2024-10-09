import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AuthResponse, UserInfoResponse } from ".";
import { FavoriteResponse, UserService } from "../api";

import { ProductList } from "@/entities/product";

type RejectValue = {
  message: string;
};

export const refreshAccessToken = createAsyncThunk<
  AuthResponse,
  void,
  { rejectValue: RejectValue }
>("user/refreshAccessToken", async (_, { rejectWithValue }) => {
  try {
    return await UserService.refreshAccessToken();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const signIn = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: RejectValue }
>("user/signIn", async ({ email, password }, { rejectWithValue }) => {
  try {
    return await UserService.signIn(email, password);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const signUp = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: RejectValue }
>("user/signUp", async ({ email, password }, { rejectWithValue }) => {
  try {
    return await UserService.signUp(email, password);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
export const foget = createAsyncThunk<
  AuthResponse,
  { email: string },
  { rejectValue: RejectValue }
>("user/send-letter", async ({ email }, { rejectWithValue }) => {
  try {
    return await UserService.foget(email);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const infoUpdate = createAsyncThunk<
  UserInfoResponse,
  {
    email: string;
    phone: string;
    name: string;
    surname: string;
    birthday: Date;
    address: string;
  },
  { rejectValue: RejectValue }
>(
  "user/infoUpdate",
  async (
    { email, phone, name, surname, birthday, address },
    { rejectWithValue }
  ) => {
    try {
      console.log({ email, phone, name, surname, birthday, address });

      return await UserService.updateInfo(
        email,
        phone,
        name,
        surname,
        birthday,
        address
      );
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: RejectValue }
>("user/logout", async (_, { rejectWithValue }) => {
  try {
    await UserService.logout();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const likeProduct = createAsyncThunk<
  FavoriteResponse,
  { productId: number },
  { rejectValue: RejectValue }
>("user/likeProduct", async ({ productId }, { rejectWithValue }) => {
  try {
    const result = await UserService.addFavorite(productId);
    return result;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

// Анлайк продукта
export const unlikeProduct = createAsyncThunk<
  FavoriteResponse,
  { productId: number },
  { rejectValue: RejectValue }
>("user/unlikeProduct", async ({ productId }, { rejectWithValue }) => {
  try {
    const result = await UserService.deleteFavorite(productId);
    return result;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

// Получение всех лайкнутых продуктов
export const fetchLikedProducts = createAsyncThunk<
  { likedProducts: ProductList },
  void,
  { rejectValue: RejectValue }
>("user/fetchLikedProducts", async (_, { rejectWithValue }) => {
  try {
    const result = await UserService.getAllFavorites();
    return result;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
