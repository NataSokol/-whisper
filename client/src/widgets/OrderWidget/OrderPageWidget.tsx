import { OrderItemProducts } from "@/entities/order/ui/OrderItem/OrderItemProduct/OrderItemProducts";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";

export const OrderPageWidget: React.FC = () => {
  const { currOrder } = useAppSelector((state) => state.order);

  return (
    <>
      {currOrder &&
        currOrder.orderItem.map((order) => (
          <OrderItemProducts key={order.id} order={order} />
        ))}
    </>
  );
};
