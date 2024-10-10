import React from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import CartOneItem from "@/entities/cartitem/ui/CartOneItem";
import styles from "./CartList.module.css";
import { CartItem, deleteCartItem, updateCartItem } from "@/entities/cartitem";
import { unwrapResult } from "@reduxjs/toolkit";
import { updateProductSize } from "@/entities/productsize";

export const CartList: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.cart?.CartItems);
  const dispatch = useAppDispatch();

  const handleDelete = async (cartItem: CartItem): Promise<void> => {

    try {
      dispatch(deleteCartItem({ id: cartItem.id }));
      dispatch(
        updateProductSize([
          cartItem.productSizeId,
          {
            ...cartItem.ProductSize,
            quantity: cartItem.ProductSize.quantity + cartItem.quantity,
          },
        ])
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleIncreaseQuantity = async (
    cartItem: CartItem
  ): Promise<void> => {
    const resultAction = await dispatch(
      updateCartItem({
        id: cartItem.id,
        quantity: cartItem.quantity + 1,
      })
    );
    await dispatch(
      updateProductSize([
        cartItem.productSizeId,
        {
          ...cartItem.ProductSize,
          quantity: cartItem.ProductSize.quantity - 1,
        },
      ])
    );
    unwrapResult(resultAction);
  };

  const onHandleDecreaseQuantity = async (
    cartItem: CartItem
  ): Promise<void> => {
    if (cartItem.quantity === 1) {
      handleDelete(cartItem);
      return;
    }
    const resultAction = await dispatch(
      updateCartItem({
        id: cartItem.id,
        quantity: cartItem.quantity - 1,
      })
    );
    await dispatch(
      updateProductSize([
        cartItem.productSizeId,
        {
          ...cartItem.ProductSize,
          quantity: cartItem.ProductSize.quantity + 1,
        },
      ])
    );
    unwrapResult(resultAction);
    return;
  };

  return (
    <div className={styles.container}>
      {cartItems?.map((item) => (
          <CartOneItem
            key={item.id}
            cartItem={item}
            handleDelete={handleDelete}
            onHandleIncreaseQuantity={onHandleIncreaseQuantity}
            onHandleDecreaseQuantity={onHandleDecreaseQuantity}
          />
      ))}
    </div>
  );
};

export default CartList;
