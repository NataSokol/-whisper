import { useCallback } from "react";
import { useAppDispatch } from "./useReduxHooks";
import { getAllOrders, getOneOrder } from "@/entities/order/model/orderThunk";

export const useOrderAction = () => {
  const dispatch = useAppDispatch();

  const getOrderList = useCallback(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const getOrder = useCallback(
    (orderId: number) => {
      dispatch(getOneOrder({ orderId }));
    },
    [dispatch]
  );

  return {
    getOrderList,
    getOrder,
  };
};
