import React from "react";
import { CartItem } from "../model";
import styles from "./CartOneItem.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { useAppDispatch } from "@/shared/hooks/useReduxHooks";
import { updateCartItem } from "../model/cartItemThunck";
import { unwrapResult } from "@reduxjs/toolkit";
// import { useAppSelector } from "@/shared/hooks/useReduxHooks";

type Props = {
  cartItem: CartItem;
  handleDelete: (id: number) => void;
};

export const CartOneItem: React.FC<Props> = ({ cartItem, handleDelete }) => {
  const dispatch = useAppDispatch();
  // const { cart } = useAppSelector((state) => state.cart);
  // console.log(cart);

  const onHandleIncreaseQuantity = async (): Promise<void> => {
      const resultAction = await dispatch(
        updateCartItem({
          id: cartItem.id,
          quantity: cartItem.quantity + 1,
        })
      );
      unwrapResult(resultAction);
  };

  const onHandleDecreaseQuantity = async (): Promise<void> => {
    const resultAction = await dispatch(
      updateCartItem({
        id: cartItem.id,
        quantity: cartItem.quantity - 1,
      })
    );
    unwrapResult(resultAction);
};


  return (
    <div className={styles.cartItemContainer}>
      <button className={styles.delCartItem}>
        <img
          src="../../public/img/plus.svg"
          alt="закрыть"
          onClick={() => handleDelete(cartItem.id)}
        />
      </button>
      <Link to={ROUTES.CATALOG + "/" + cartItem.productId}>
        <h1 className={styles.cartItemTitle}>{cartItem.Product.title}</h1>
      </Link>
      <Link to={ROUTES.CATALOG + "/" + cartItem.productId}>
        <img
          src={cartItem.Product?.Images[0].url}
          className={styles.cartItemImage}
        />
      </Link>
      <p className={styles.cartItemDetails}>
        {cartItem.colorProduct.Color.title}
      </p>
      <p className={styles.cartItemPrice}>{cartItem.Product.price}</p>
      <p className={styles.cartItemPrice}>{cartItem.Product.salePrice}</p>
      <p className={styles.cartItemDetails}>{cartItem.ProductSize.sizeTitle}</p>
      <button onClick={onHandleDecreaseQuantity}>-</button>
      <p className={styles.cartItemDetails}>Количество:{cartItem.quantity}</p>
      <button
        onClick={onHandleIncreaseQuantity}>
        +
      </button>
    </div>
  );
};

export default CartOneItem;
