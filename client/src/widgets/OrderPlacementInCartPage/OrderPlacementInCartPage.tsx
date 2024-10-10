import React, { useMemo, useEffect } from "react";
import styles from "./OrderPlacementInCartPage.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import { updateCart } from "@/entities/cart";
import { unwrapResult } from "@reduxjs/toolkit";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";

type OrderPlacementInCartPageProps = {};

export const OrderPlacementInCartPage: React.FC<
  OrderPlacementInCartPageProps
> = ({}) => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const totalPrice = useMemo((): number => {
    return (
      cart?.CartItems?.reduce((acc, item) => {
        return acc + item.quantity * item.Product.price;
      }, 0) ?? 0
    );
  }, [cart]);

  const salePrice = useMemo((): number => {
    return (
      cart?.CartItems?.reduce((acc, item) => {
        if (item.Product.salePrice) {
          return acc + item.quantity * item.Product.salePrice;
        }
        return acc + item.quantity * item.Product.price;
      }, 0) ?? 0
    );
  }, [cart]);

  const updateCartTotal = async () => {
    const result = await dispatch(
      updateCart({ id: cart!.id, total: totalPrice, salePrice: salePrice })
    );
    unwrapResult(result);
  };

  useEffect(() => {
    updateCartTotal();
  }, [dispatch, totalPrice]);

  return (
    <div className={styles.container}>
      <span className={styles.header}><b>ваш заказ</b></span>
      <div className={styles.price}>
      <div className={styles.sum}>
        <p>сумма заказа</p>
        <p>{cart?.total}₽</p>
      </div>
      <div>
        <p>итого</p>
        <p>{cart?.salePrice}₽</p>
      </div>
      </div>
      <Link to={ROUTES.ORDER}>
        <Button theme={ThemeButton.DARK}>перейти к оформлению</Button>
      </Link>
    </div>
  );
};

export default OrderPlacementInCartPage;
