import { createSlice } from "@reduxjs/toolkit";
import { User } from ".";
import { getUserInfo } from "./UserInfoThunk";

type UserInfoState = {
  user: User | null;
  error: string | null;
  loading: boolean;
};

const initialState: UserInfoState = {
  user: null,
  error: null,
  loading: false,
};

const UserInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //! ------------------- get
      .addCase(getUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user  = action.payload.user;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
    //! -------------------
  },
});

export default UserInfoSlice.reducer;
