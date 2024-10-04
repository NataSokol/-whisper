import { createAsyncThunk } from "@reduxjs/toolkit";
import { CollectionListResponse, CollectionResponse } from ".";
import { CollectionService } from "../api";
import { AxiosError } from "axios";

type RejectValue = {
  message: string;
};

export const getAllCollections = createAsyncThunk<
  CollectionListResponse,
  void,
  { rejectValue: RejectValue }
>("/getAllCollection", async (_, { rejectWithValue }) => {
  try {
    return await CollectionService.getAllCollections();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const createCollection = createAsyncThunk<
  CollectionResponse,
  { title: string; image: string },
  { rejectValue: RejectValue }
>("/createCollection", async ({ title, image }, { rejectWithValue }) => {
  try {
    return await CollectionService.createCollection({ title, image });
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const updateCollection = createAsyncThunk<
  CollectionResponse,
  { id: number; title: string; image: string },
  { rejectValue: RejectValue }
>("/updateCollection", async ({ id, title, image }, { rejectWithValue }) => {
  try {
    return await CollectionService.updateCollection(id, { title, image });
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const deleteCollection = createAsyncThunk<
  void,
  { id: number },
  { rejectValue: RejectValue }
>("/deleteCollection", async ({ id }, { rejectWithValue }) => {
  try {
    await CollectionService.deleteCollection(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
