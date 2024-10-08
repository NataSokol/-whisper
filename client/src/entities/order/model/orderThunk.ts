// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { AxiosError } from "axios";
// import { Category, CategoryResponse } from ".";
// import { CategoryServices } from "../api";

// type RejectValue = {
//   message: string;
// };

// export const getAllCategory = createAsyncThunk<
//   CategoryResponse,
//   void,
//   { rejectValue: RejectValue }
// >("/getAllCategory", async (_, { rejectWithValue }) => {
//   try {
//     return await CategoryServices.getAllCategory();
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     return rejectWithValue({
//       message: err.response?.data.message || err.message,
//     });
//   }
// });

// export const createCategory = createAsyncThunk<
//   Category,
//   { title: string },
//   { rejectValue: RejectValue }
// >("/createCategory", async ({ title }, { rejectWithValue }) => {
//   try {
//     return await CategoryServices.createCategory(title);
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     return rejectWithValue({
//       message: err.response?.data.message || err.message,
//     });
//   }
// });

// export const updateCategory = createAsyncThunk<
//   Category,
//   Omit<Category, "createdAt" | "updatedAt">,
//   { rejectValue: RejectValue }
// >("/updateCategory", async (category, { rejectWithValue }) => {
//   try {
//     return await CategoryServices.updateCategory(category.id, category.title);
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     return rejectWithValue({
//       message: err.response?.data.message || err.message,
//     });
//   }
// });

// export const deleteCategory = createAsyncThunk<
//   void,
//   { id: number },
//   { rejectValue: RejectValue }
// >("/deleteCategory", async ({ id }, { rejectWithValue }) => {
//   try {
//     await CategoryServices.deleteCategory(id);
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     return rejectWithValue({
//       message: err.response?.data.message || err.message,
//     });
//   }
// });
