import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AuthResponse, UserInfoResponse } from ".";
import { UserService } from "../api";

type RejectValue = {
  message: string;
};

export const refreshAccessToken = createAsyncThunk<
  AuthResponse,
  void,
  { rejectValue: RejectValue }
>("user/refreshAccessToken", async (_, { rejectWithValue }) => {
  try {
    return await UserService.refreshAccessToken();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const signIn = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: RejectValue }
>("user/signIn", async ({ email, password }, { rejectWithValue }) => {
  try {
    return await UserService.signIn(email, password);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const signUp = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: RejectValue }
>("user/signUp", async ({ email, password }, { rejectWithValue }) => {
  try {
    return await UserService.signUp(email, password);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
export const forget = createAsyncThunk<
  AuthResponse,
  { email: string },
  { rejectValue: RejectValue }
>("user/send-letter", async ({ email }, { rejectWithValue }) => {
  try {
    return await UserService.forget(email);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const infoUpdate = createAsyncThunk<
UserInfoResponse ,
  {
    email: string;
    phone: string;
    name: string;
    surname: string;
    birthday: Date;
    address: string;
  },
  { rejectValue: RejectValue }
>(
  "user/infoUpdate",
  async (
    { email, phone, name, surname, birthday, address },
    { rejectWithValue }
  ) => {
    try {
      console.log( { email, phone, name, surname, birthday, address });
      
      
      return await UserService.updateInfo(
        email,
        phone,
        name,
        surname,
        birthday,
        address
      );
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: RejectValue }
>("user/logout", async (_, { rejectWithValue }) => {
  try {
    await UserService.logout();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
