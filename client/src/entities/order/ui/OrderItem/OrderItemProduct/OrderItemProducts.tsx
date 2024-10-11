import { ROUTES } from "@/app/router/routes";
import styles from "./OrderItemProducts.module.css";
import { OrderItem } from "@/entities/order/model";
import { Link } from "react-router-dom";

type OrderItemProps = {
  order: OrderItem;
};

export const OrderItemProducts: React.FC<OrderItemProps> = ({ order }) => {
  console.log(order);
  return (
    <div className={styles.container}>
      <h2 className={styles.cartItemTitle}>Заказ №{order.id}</h2>
      <div className={styles.cartItemContainer}>
        <Link to={ROUTES.CATALOG + "/" + order.productId}>
          <img
            src={order.Product?.Images?.[0].url}
            className={styles.cartItemImage}
          />
        </Link>
        <div className={styles.productInfo}>
          <Link to={ROUTES.CATALOG + "/" + order.productId}>
            <h1 className={styles.cartItemTitle}>{order.Product.title}</h1>
          </Link>
          <div className={styles.cartItemDetails}>
            <p>Цвет: {order.colorProduct.Color.title}</p>
            <p>Размер: {order.ProductSize.sizeTitle}</p>
          </div>
          <div className={styles.price}>
            <div
              className={styles.basePrice}
              style={{
                textDecoration: order.Product?.salePrice
                  ? "line-through"
                  : "none",
              }}
            >
              {order.Product?.price} ₽
            </div>
            {order.Product?.salePrice && (
              <div className={styles.salePrice}>
                {order.Product?.salePrice} ₽
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
