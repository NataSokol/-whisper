import React from "react";
import { CartItem } from "../model";
import styles from "./CartOneItem.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";

type Props = {
  cartItem: CartItem;
  handleDelete: (id: number) => void;
};

export const CartOneItem: React.FC<Props> = ({ cartItem, handleDelete }) => {
  const { cart } = useAppSelector((state) => state.cart);
  // console.log(cart);



  return (
    <div className={styles.cartItemContainer}>
      <button className={styles.delCartItem}>
        <img src="../../public/img/plus.svg" alt="закрыть" onClick={() => handleDelete(cartItem.id)}/>
      </button>
      <Link to={ROUTES.CATALOG + "/" + cartItem.productId}>
        <h1 className={styles.cartItemTitle}>{cartItem.Product.title}</h1>
      </Link>
      <Link to={ROUTES.CATALOG + "/" + cartItem.productId}>
        <img
          src={cartItem.Product.Images[0].url}
          className={styles.cartItemImage}
        />
      </Link>
      <p className={styles.cartItemDetails}>
        {cartItem.colorProduct.Color.title}
      </p>
      <p className={styles.cartItemPrice}>{cartItem.Product.price}</p>
      <p className={styles.cartItemPrice}>{cartItem.Product.salePrice}</p>
      <p className={styles.cartItemDetails}>{cartItem.ProductSize.sizeTitle}</p>
      <button onClick={() => {}}>-</button> 
      <p className={styles.cartItemDetails}>Количество:{cartItem.quantity}</p>
      <button  onClick={() => {}}>+</button>
    </div>
  );
};

export default CartOneItem;
