import { createSlice } from "@reduxjs/toolkit";
import { CollectionList } from ".";
import { createCollection, deleteCollection, getAllCollections, updateCollection } from "./collectionThunk";


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
      //! ------------------- get
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
        })
        //! ------------------- create 
        .addCase(createCollection.pending, (state) => {
          state.loading = true;
        })
        .addCase(createCollection.fulfilled, (state, action) => {
          state.loading = false;
          state.collections.push(action.payload.collection);
        })
        .addCase(createCollection.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something went wrong";
        })
        //! ------------------- update
        .addCase(updateCollection.pending, (state) => {
          state.loading = true;
        })
        .addCase(updateCollection.fulfilled, (state, action) => {
          state.loading = false;
          state.collections = state.collections.map((collection) =>
            collection.id === action.payload.collection.id
              ? action.payload.collection
              : collection
          );
        })
        .addCase(updateCollection.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something went wrong";
        })
        //! ------------------- delete
        .addCase(deleteCollection.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteCollection.fulfilled, (state, action) => {
          state.loading = false;
          state.collections = state.collections.filter(
            (collection) => collection.id !== action.meta.arg.id
          );
        })
        .addCase(deleteCollection.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something went wrong";
        })
    },
  });   

  export default collectionSlice.reducer;