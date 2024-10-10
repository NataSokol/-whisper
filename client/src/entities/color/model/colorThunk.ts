import { AxiosError } from "axios";
import { ColorResponse, CreateColorRequest, CreateColorResponse, OneColorResponse } from ".";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ColorServices } from "../api";

type RejectValue = {
  message: string;
};

export const getAllColors = createAsyncThunk<
  ColorResponse,
  void,
  { rejectValue: RejectValue }
>("/getAllColor", async (_, { rejectWithValue }) => {
  try {
    return await ColorServices.getAllColors();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const getOneColor = createAsyncThunk<
  OneColorResponse,
  { id: number },
  { rejectValue: RejectValue }
>("/getOneColor", async ({ id }, { rejectWithValue }) => {
  try {
    return await ColorServices.getOneColor(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const createColor = createAsyncThunk<
  CreateColorResponse,
  CreateColorRequest,
  { rejectValue: RejectValue }
>(
  "/createColor",
  async ({ title, colorCode, productId }, { rejectWithValue }) => {
    try {
      const response = await ColorServices.createColor(
        title,
        colorCode,
        productId
      );
      console.log(response);
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const updateColor = createAsyncThunk<
  OneColorResponse,
  { id: number; title: string; code: string },
  { rejectValue: RejectValue }
>("/updateColor", async ({ id, title, code }, { rejectWithValue }) => {
  try {
    return await ColorServices.updateColor(id, title, code);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
