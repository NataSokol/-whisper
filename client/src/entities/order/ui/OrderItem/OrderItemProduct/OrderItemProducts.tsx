import { OrderItem } from "@/entities/order/model";


type OrderItemProps = {
  order: OrderItem;
};

export const OrderItemProducts: React.FC<OrderItemProps> = ({ order }) => {
  

  return (
    <>
      <div>
        444
        {order.Product.title}
      </div>
    </>
  );
};
