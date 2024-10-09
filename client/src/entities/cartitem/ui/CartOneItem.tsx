import React from "react";
import { CartItem } from "../model";
import styles from "./CartOneItem.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";

type Props = {
  cartItem: CartItem;
};

export const CartOneItem: React.FC<Props> = ({ cartItem }) => {
  const {cart} = useAppSelector((state) => state.cart);
  console.log(cart);
  

  return (
    <div className={styles.cartItemContainer}>
      <Link to={ROUTES.CATALOG + '/' + cartItem.Product.id}><h1 className={styles.cartItemTitle}>{cartItem.Product.title}</h1></Link>
      <Link to={ROUTES.CATALOG + '/' + cartItem.Product.id}><img src={cartItem.Product.Images[0].url} className={styles.cartItemImage} /></Link>
      <p className={styles.cartItemDetails}>{cartItem.colorProduct.Color.title}</p>
      <p className={styles.cartItemPrice}>{cartItem.Product.price}</p>
      <p className={styles.cartItemPrice}>{cartItem.Product.salePrice}</p>
      <p className={styles.cartItemDetails}>{cartItem.ProductSize.sizeTitle}</p>
      <p className={styles.cartItemDetails}>Количество:{cartItem.quantity}</p>
    </div>
  );
};

export default CartOneItem;
