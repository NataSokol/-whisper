import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ProductListResponse, ProductResponse } from ".";
import { ProductServices } from "../api";

type RejectValue = {
  message: string;
};

export const getAllProducts = createAsyncThunk<
  ProductListResponse,
  void,
  { rejectValue: RejectValue }
>("/getAllProducts", async (_, { rejectWithValue }) => {
  try {
    return await ProductServices.getAllProducts();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const getProduct = createAsyncThunk<
  ProductResponse,
  number,
  { rejectValue: RejectValue }
>("/getProduct", async (id, { rejectWithValue }) => {
  try {
    return await ProductServices.getProduct(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
