import { getOneOrder } from "@/entities/order";
import { useAppDispatch } from "@/shared/hooks/useReduxHooks";
import { OrderPageWidget } from "@/widgets/OrderWidget/OrderPageWidget";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



export const OrderPage: React.FC = () => {
  const { orderId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (orderId) {
      dispatch(getOneOrder({ orderId: +orderId }));
    }
  }, [dispatch, orderId]);
  return <OrderPageWidget />;
};

export default OrderPage;