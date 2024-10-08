import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  CreateProductSizeRequest,
  ProductSize,
  ProductSizeListResponse,
  ProductSizeResponse,
} from ".";
import { ProductSizeService } from "../api";
import { AxiosError } from "axios";

type RejectValue = {
  message: string;
};

export const getAllProductSizes = createAsyncThunk<
  ProductSizeListResponse,
  void,
  { rejectValue: RejectValue }
>("/getAllProductSizes", async (_, { rejectWithValue }) => {
  try {
    return await ProductSizeService.getAllProductSize();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const getOneProductSize = createAsyncThunk<
  ProductSizeResponse,
  { id: number },
  { rejectValue: RejectValue }
>("/getOneProduct", async ({ id }, { rejectWithValue }) => {
  try {
    return await ProductSizeService.getProductSize(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const createProductSize = createAsyncThunk<
  ProductSizeResponse,
  CreateProductSizeRequest,
  { rejectValue: RejectValue }
>("/createProductSize", async (data, { rejectWithValue }) => {
  try {
    return await ProductSizeService.createProductSize(data);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const updateProductSize = createAsyncThunk<
  ProductSizeResponse,
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
