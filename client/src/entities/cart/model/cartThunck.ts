import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartResponse } from ".";
import { CartService } from "../api";
import { AxiosError } from "axios";

type RejectValue = {
  message: string;
};

export const getCart = createAsyncThunk<
  CartResponse,
  void,
  { rejectValue: RejectValue }
>("/getCart", async (_, { rejectWithValue }) => {
  try {
    return await CartService.getCart();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

// export const createCart = createAsyncThunk<
//   CartResponse,
//   void,
//   { rejectValue: RejectValue }
// >("/createCart", async (_, { rejectWithValue }) => {
//   try {
//     return await CartService.createCart();
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     return rejectWithValue({
//       message: err.response?.data.message || err.message,
//     });
//   }
// });

export const updateCart = createAsyncThunk<
  CartResponse,
  { id: number; total: number; salePrice: number },
  { rejectValue: RejectValue }
>("/updateCart", async ({ id, total, salePrice }, { rejectWithValue }) => {
  try {
    const result = await CartService.updateCart( id, total, salePrice );
    return result;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const deleteCart = createAsyncThunk<
  void,
  { id: number},
  { rejectValue: RejectValue }
>("/deleteCart", async ({id}, { rejectWithValue }) => {
  try {
    await CartService.deleteCart(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
