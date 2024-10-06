import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { OneProductResponse, Product, ProductResponse } from ".";
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

export const getOneProduct = createAsyncThunk<
  OneProductResponse,
  { id: number },
  { rejectValue: RejectValue }
>("/getOneProduct", async ({ id }, { rejectWithValue }) => {
  try {
    return await ProductServices.getProduct(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const updateProduct = createAsyncThunk<
  OneProductResponse,
  [number, Product],
  { rejectValue: RejectValue }
>("/updateProduct", async ([id, productData], { rejectWithValue }) => {
  try {
    const response = await ProductServices.updateProduct(id, productData);
    return response;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const deleteProduct = createAsyncThunk<
  void,
  { id: number },
  { rejectValue: RejectValue }
>("/deleteProduct", async ({ id }, { rejectWithValue }) => {
  try {
    await ProductServices.deleteProduct(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
