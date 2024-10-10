import React from "react";
import { CartItem } from "../model";
import styles from "./CartOneItem.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";

type Props = {
  cartItem: CartItem;
  handleDelete: (cartItem: CartItem) => void;
  onHandleIncreaseQuantity: (cartItem: CartItem) => void;
  onHandleDecreaseQuantity: (cartItem: CartItem) => void;
};

export const CartOneItem: React.FC<Props> = ({
  cartItem,
  handleDelete,
  onHandleIncreaseQuantity,
  onHandleDecreaseQuantity,
}) => {
  return (
    <div className={styles.cartItemContainer}>
      <Link to={ROUTES.CATALOG + "/" + cartItem.productId}>
        <img
          src={cartItem.Product?.Images[0].url}
          className={styles.cartItemImage}
        />
      </Link>
      <div className={styles.productInfo}>
        <button className={styles.delCartItem}>
          <img
            src="../../public/img/plus.svg"
            alt="закрыть"
            onClick={() => handleDelete(cartItem)}
          />
        </button>
        <Link to={ROUTES.CATALOG + "/" + cartItem.productId}>
          <h1 className={styles.cartItemTitle}>{cartItem.Product.title}</h1>
        </Link>
        <div className={styles.cartItemDetails}>
        <p >
          Цвет: {cartItem.colorProduct.Color.title}
        </p>
        <p >
          Размер: {cartItem.ProductSize.sizeTitle}
        </p>
        </div>
        <div className={styles.price}>
          <div
            className={styles.basePrice}
            style={{
              textDecoration: cartItem.Product?.salePrice
                ? "line-through"
                : "none",
            }}
          >
            {cartItem.Product?.price} ₽
          </div>
          {cartItem.Product?.salePrice && (
            <div className={styles.salePrice}>
              {cartItem.Product?.salePrice} ₽
            </div>
          )}
        </div>
        <div className={styles.cartItemCounter}>
          <button onClick={() => onHandleDecreaseQuantity(cartItem)}>-</button>
          <p className={styles.cartItemDetails}>{cartItem.quantity}</p>
          <button onClick={() => onHandleIncreaseQuantity(cartItem)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartOneItem;
