import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { getCart } from "@/entities/cart";
import CartOneItem from "@/entities/cartitem/ui/CartOneItem";
import styles from "./CartList.module.css";

export const CartList: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cart?.CartItems);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {cartItems?.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <CartOneItem cartItem={item}/>
        </div>
      ))}
    </div>
  );
};

export default CartList;