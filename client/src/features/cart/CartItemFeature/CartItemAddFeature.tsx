import React, { useState } from "react";
import styles from "./CartItemAddFeature.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import ModalWindow from "@/shared/ui/Modal/Modal";
import { ProductSize, updateProductSize } from "@/entities/productsize";
import { Color } from "@/entities/color";
import SizesMeasures from "@/shared/ui/SizesMeasures/SizesMeasures";
import { createCartItem, updateCartItem } from "@/entities/cartitem";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { message } from "antd";

export const CartItemAddFeature: React.FC = () => {
  const { currProduct } = useAppSelector((state) => state.product);
  const [active, setActives] = useState(false);
  const navigate = useNavigate();
 
  const [selectedColor, setSelectedColor] = useState<Color["id"]>();
  const [selectedSize, setSelectedSize] = useState<ProductSize>();

  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const currCartItem = cart?.CartItems?.find(
    (cartItem) =>
      cartItem.productColorId === selectedColor &&
      cartItem.productSizeId === selectedSize?.id
  );

    
  const onHandleCrateCartItem = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise< void> => {
    e.preventDefault();
    if (!currProduct || !cart) {
      return;
    }
    if (selectedColor && selectedSize) {
      if (currCartItem) {
        const resultAction = await dispatch(
          updateCartItem({
            id: currCartItem.id,
            quantity: currCartItem.quantity + 1,
          })
        );
        await dispatch(
          updateProductSize([
            currCartItem.productSizeId,
            {
              ...currCartItem.ProductSize,
              quantity: currCartItem.ProductSize.quantity - 1,
            },
          ])
        );
        message.success("Товар добавлен в корзину");
        unwrapResult(resultAction);
      } else {
        const resultAction = await dispatch(
          createCartItem({
            cartId: cart?.id,
            productId: currProduct?.id,
            quantity: 1,
            productColorId: selectedColor,
            productSizeId: selectedSize.id,
          })
        );
        if (selectedSize) {
          await dispatch(
            updateProductSize([
              selectedSize.id,
              {
                ...selectedSize,
                quantity: selectedSize.quantity - 1,
              },
            ])
          );
        }
        message.success("Товар добавлен в корзину");
        unwrapResult(resultAction);
      }
    } else {
      message.error("Выберите размер и цвет");
    }
  };

  return (
    <form onSubmit={onHandleCrateCartItem}>
      <div className={styles.pickedColor}>
        цвет:
        {currProduct?.Colors?.find((c) => c.id === selectedColor)?.title ||
          "не выбран"}
      </div>
      <div className={styles.colorPicker}>
        {currProduct?.Colors?.map((color) => (
          <label key={color.id}>
            <input
              type="radio"
              value={color.id}
              checked={selectedColor === color.id}
              onChange={() => setSelectedColor(color.id)}
            />
            <div
              className={styles.colorBorder}
              style={{
                border: selectedColor === color.id ? "2px solid black" : "none",
              }}
            >
              <div
                className={styles.color}
                style={{
                  backgroundColor: color.colorCode,
                }}
              ></div>
            </div>
          </label>
        ))}
      </div>

      <div className={styles.sizePickerHeaderContainer}>
        <div className={styles.sizePickerHeader}>размер</div>
        <div onClick={() => setActives(!active)} className={styles.sizingModal}>
          Подобрать размер
        </div>
        {active && (
          <ModalWindow active={active} setActive={setActives}>
            <SizesMeasures active={active} setActive={setActives} />
          </ModalWindow>
        )}
      </div>
      <div className={styles.sizePicker}>
        {currProduct?.ProductSizes?.map((size) => (
          <label key={size.id}>
            <input
              type="radio"
              value={size.id}
              checked={selectedSize?.id === size.id}
              onChange={() => setSelectedSize(size)}
            />
            <div
              className={styles.size}
              style={{
                backgroundColor: selectedSize?.id === size.id ? "black" : "white",
                color: selectedSize?.id === size.id ? "white" : "black",
              }}
            >
              {size.sizeTitle}
            </div>
          </label>
        ))}
      </div>

      {currCartItem ? (
        <button
          type="submit"
          className={styles.cartButton}
          style={{
            backgroundColor: !currProduct || !cart ? "lightgray" : "black",
          }}
          onClick={() => navigate(ROUTES.CART)}
        >
          перейти в корзину
        </button>
      ) : (
        <button
          type="submit"
          className={styles.cartButton}
          disabled={!currProduct || !cart}
          style={{
            backgroundColor: !currProduct || !cart ? "lightgray" : "black",
          }}
        >
          добавить в корзину
        </button>
      )}
    </form>
  );
};

export default CartItemAddFeature;
