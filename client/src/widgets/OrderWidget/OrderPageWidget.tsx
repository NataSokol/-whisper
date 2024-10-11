import { OrderItemProducts } from "@/entities/order/ui/OrderItem/OrderItemProduct/OrderItemProducts";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";

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
