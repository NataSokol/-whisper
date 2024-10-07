import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductSize, ProductSizeResponse } from ".";
import { ProductSizeService } from "../api";
import { AxiosError } from "axios";

type RejectValue = {
  message: string;
};

export const updateProductSize = createAsyncThunk<
  ProductSize,
  [number, ProductSize],
  { rejectValue: RejectValue }
>("/updateProductSize", async ([id, productSize], { rejectWithValue }) => {
  try {
    return await ProductSizeService.updateProductSize(id, productSize);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const deleteProductSize = createAsyncThunk<
  void,
  { id: number },
  { rejectValue: RejectValue }
>("/deleteProductSize", async ({ id }, { rejectWithValue }) => {
  try {
    return await ProductSizeService.deleteProductSize(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
