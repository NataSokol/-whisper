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

export const CartOneItem: React.FC<Props> = ({ cartItem, handleDelete, onHandleIncreaseQuantity, onHandleDecreaseQuantity }) => {
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
      <p className={styles.cartItemDetails}>
        {cartItem.colorProduct.Color.title}
      </p>
      <p className={styles.cartItemPrice}>{cartItem.Product.price}</p>
      <p className={styles.cartItemPrice}>{cartItem.Product.salePrice}</p>
      <p className={styles.cartItemDetails}>{cartItem.ProductSize.sizeTitle}</p>
      <button onClick={() => onHandleDecreaseQuantity(cartItem)}>-</button>
      <p className={styles.cartItemDetails}>Количество:{cartItem.quantity}</p>
      <button
        onClick={() => onHandleIncreaseQuantity(cartItem)}>
        +
      </button>
      </div>
    </div>
  );
};

export default CartOneItem;
