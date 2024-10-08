import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { UserInfoResponse } from ".";
import { UserInfoServices } from "../api";

type RejectValue = {
  message: string;
};

export const getUserInfo = createAsyncThunk<
  UserInfoResponse,
  void,
  { rejectValue: RejectValue }
>("/getUserInfo", async (_, { rejectWithValue }) => {
  try {
    return await UserInfoServices.getUserInfo();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
