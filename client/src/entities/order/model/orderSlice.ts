import { createSlice } from "@reduxjs/toolkit";
import { Order, OrderList } from ".";

import { getAllOrders, getOneOrder } from "./orderThunk";

type OrderState = {
  orders: OrderList;
  currOrder: Order | null;
  loading: boolean;
  error: string | null;
};

const initialState: OrderState = {
  orders: [],
  currOrder: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //! ------------------- get
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      //! ------------------- getOne
      .addCase(getOneOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.currOrder = action.payload.order;
      })
      .addCase(getOneOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default orderSlice.reducer;
