import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ProductResponse } from ".";
import { ProductServices } from "../api";

type RejectValue = {
  message: string;
};

export const getAllProducts = createAsyncThunk<
  ProductResponse,
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
