import React from "react";
import {  useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";

import CartOneItem from "@/entities/cartitem/ui/CartOneItem";
import styles from "./CartList.module.css";
import { deleteCartItem } from "@/entities/cartitem";

export const CartList: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.cart?.CartItems);
  const dispatch = useAppDispatch();

  const handleDelete = async (id: number) : Promise<void> => {
    try {
      dispatch(deleteCartItem({ id }));

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      {cartItems?.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <CartOneItem cartItem={item} handleDelete={handleDelete}/>
        </div>
      ))}
    </div>
  );
};

export default CartList;