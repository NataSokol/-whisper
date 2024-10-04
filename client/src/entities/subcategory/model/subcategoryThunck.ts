import { createAsyncThunk } from "@reduxjs/toolkit";
import { SubcategoryListResponce, SubcategoryResponce } from ".";
import { SubcategoryService } from "../api";
import { AxiosError } from "axios";
type RejectValue = {
    message: string;
  };

export const getAllSubcategories = createAsyncThunk<
SubcategoryListResponce,
  void,
  { rejectValue: RejectValue }
>("/getAllSubcategories", async (_, { rejectWithValue }) => {
  try {
    return await SubcategoryService.getAllSubcategories();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const createSubcategory = createAsyncThunk<
SubcategoryResponce,
  {  title: string,
    image: string,
  },
  { rejectValue: RejectValue }
>("/createSubcategory", async ({title}, { rejectWithValue }) => {
  try {
   return await SubcategoryService.createSubcategory({title});
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
  

export const updateSubcategory = createAsyncThunk<
SubcategoryResponce,
  {  id: number,
    title: string,
  },
  { rejectValue: RejectValue }
>("/updateSubcategory", async ({id, title}, { rejectWithValue }) => {
  try {
   return await SubcategoryService.updateSubcategory(id, {title});
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const deleteSubcategory = createAsyncThunk<
void,
  { id: number },
  { rejectValue: RejectValue }
>("/deleteSubcategory", async ({ id }, { rejectWithValue }) => {
  try {
    await SubcategoryService.deleteSubcategory(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});