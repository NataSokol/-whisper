import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { OneOrderResponse, OrderResponse } from ".";
import { OrderServices } from "../api";

type RejectValue = {
  message: string;
};

export const getAllOrders = createAsyncThunk<
  OrderResponse,
  void,
  { rejectValue: RejectValue }
>("/getAllOrders", async (_, { rejectWithValue }) => {
  try {
    return await OrderServices.getAllOrders();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const getOneOrder = createAsyncThunk<
OneOrderResponse ,
  { orderId: number },
  { rejectValue: RejectValue }
>("/getOneOrder", async ({ orderId }, { rejectWithValue }) => {
  try {
      
    return await OrderServices.getOrder(orderId);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});


