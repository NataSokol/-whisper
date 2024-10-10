import { Link } from "react-router-dom";
import { Order } from "../../model";
import styles from "./OrderItem.module.css";

type OrderProps = {
  order: Order;
};

export const OrderItem: React.FC<OrderProps> = ({ order }) => {
  return (
    <Link to={`/profile/orders/${order.id}`} className={styles.card}>
      <img
        className={styles.image}
        src="https://i.pinimg.com/564x/74/c3/0a/74c30ad8049447c30d5710a14091f1aa.jpg"
        alt="Product Image"
      />
      <div className={styles.details}>
        <h1 className={styles.orderNumber}>Ваш заказ № {order.id}</h1>
        <p className={styles.deliveryDetails}>
          Детали доставки: {order.adress}
        </p>
      </div>
      <div className={styles.details2}>
        <p className={styles.price}>{order.total} руб.</p>
        <h3 className={styles.status}>{order.status}</h3>
      </div>
    </Link>
  );
};
