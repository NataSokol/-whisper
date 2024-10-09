import React from "react";
import { CartItem } from "../model";
import styles from "./CartOneItem.module.css";

type Props = {
  cartItem: CartItem;
};

export const CartOneItem: React.FC<Props> = ({ cartItem }) => {
  const { ProductSize, colorProduct } = cartItem;

  return (
    <div className={styles.cartItemContainer}>
      <h1 className={styles.cartItemTitle}>{cartItem.Product.title}</h1>
      <img src={cartItem.Product.image} className={styles.cartItemImage} />
      <p className={styles.cartItemDetails}>{colorProduct.Color.title}</p>
      <p className={styles.cartItemPrice}>{cartItem.Product.price}</p>
      <p className={styles.cartItemDetails}>{ProductSize.sizeTitle}</p>
      <p className={styles.cartItemDetails}>Количество:{cartItem.quantity}</p>
    </div>
  );
};

export default CartOneItem;
