import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  CreateProductRequest,
  OneProductResponse,
  Product,
  ProductResponse,
} from ".";
import { ProductServices } from "../api";

type RejectValue = {
  message: string;
};

export const getAllProducts = createAsyncThunk<
  ProductResponse,
  {collectionId: number}| undefined,
  { rejectValue: RejectValue }
>("/getAllProducts", async (params , { rejectWithValue }) => {
  try {
    return await ProductServices.getAllProducts(params);
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

export const createProduct = createAsyncThunk<
  Product,
  CreateProductRequest,
  { rejectValue: RejectValue }
>(
  "/createProduct",
  async (
    {
      title,
      images,
      description,
      composition,
      price,
      collectionId,
      categoryId,
      subcategoryId,
    },
    { rejectWithValue }
  ) => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("composition", composition);
      formData.append("price", String(price));
      formData.append("collectionId", String(collectionId));
      formData.append("categoryId", String(categoryId));
      formData.append("subcategoryId", String(subcategoryId));

      images.forEach((image) => {
        formData.append("images", image);
      });
      return await ProductServices.createProduct(formData);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

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
