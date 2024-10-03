import { createSlice } from "@reduxjs/toolkit";
import { CollectionList } from ".";
import { getAllCollections } from "./collectionThunk";


type CollectionState = {
    collections: CollectionList;
    loading: boolean;
    error: string | null;
  };

  const initialState: CollectionState = {
    collections: [],
    loading: false,
    error: null,
  };

  const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAllCollections.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllCollections.fulfilled, (state, action) => {
          state.loading = false;
          state.collections = action.payload.collections;
        })
        .addCase(getAllCollections.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something went wrong";
        });
    },
  });   

  export default collectionSlice.reducer;