import { createAsyncThunk } from "@reduxjs/toolkit";
import { CollectionListResponse } from ".";
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
    return await CollectionService.geyAllCollections();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

  