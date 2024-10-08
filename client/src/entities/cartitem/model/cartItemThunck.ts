import { createAsyncThunk } from "@reduxjs/toolkit";
import {  CartItemResponse } from ".";
import { CartItemService } from "../api";
import { AxiosError } from "axios";

type RejectValue = {
  message: string;
};

export const getCartItemById = createAsyncThunk<
  CartItemResponse,
  { id: number },
  { rejectValue: RejectValue }
>("/getCartItemById", async ({ id }, { rejectWithValue }) => {
  try {
    return await CartItemService.getCartItemById(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});



export const createCartItem = createAsyncThunk<
CartItemResponse,
  { cartId: number, productId: number, quantity: number, productSizeId: number, productColorId: number },
  { rejectValue: RejectValue }
>("/createCartItem", async ({ cartId, productId, quantity, productSizeId, productColorId }, { rejectWithValue }) => {
  try {
    return await CartItemService.createCartItem(cartId, productId, quantity, productSizeId, productColorId);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const updateCartItem = createAsyncThunk<
CartItemResponse,
  { id: number, quantity: number },
  { rejectValue: RejectValue }
>("/updateCartItem", async ({ id, quantity }, { rejectWithValue }) => {
  try {
    return await CartItemService.updateCartItem(id, quantity);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const deleteCartItem = createAsyncThunk<
  void,
  { id: number },
  { rejectValue: RejectValue }
>("/deleteCartItem", async ({ id }, { rejectWithValue }) => {
  try {
    await CartItemService.deleteCartItem(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

