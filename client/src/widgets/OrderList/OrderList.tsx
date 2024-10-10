import { OrderItem } from "@/entities/order/ui/OrderItem/OrderItem";
import { useOrderAction } from "@/shared/hooks/useOrderActions";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useEffect } from "react";

export const OrderList: React.FC = () => {
  const state = useAppSelector((state) => state.order);
  const { getOrderList } = useOrderAction();
  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <div>
      {state.orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};
