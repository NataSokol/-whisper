import React, { useState } from 'react'
import styles from './CartItemAddFeature.module.css'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/useReduxHooks'
import ModalWindow from '@/shared/ui/Modal/Modal'
import { ProductSize } from '@/entities/productsize'
import { Color } from '@/entities/color'
import { createCartItem, updateCartItem } from '@/entities/cartitem'
import SizesMeasures from '@/shared/ui/SizesMeasures/SizesMeasures'



export const CartItemAddFeature: React.FC= () => {
  const { currProduct } = useAppSelector((state) => state.product);
  const [active, setActives] = useState(false);

  const [selectedColor, setSelectedColor] = useState<Color["id"]>();
  const [selectedSize, setSelectedSize] = useState<ProductSize["id"]>();


  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const currCartItem = cart?.CartItems?.find(
    (cartItem) =>
      cartItem.productColorId === selectedColor &&
      cartItem.productSizeId === selectedSize
  );

  const onHandleCrateCartItem = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
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
        console.log(resultAction);
      } else {
        const resultAction = await dispatch(
          createCartItem({
            cartId: cart?.id,
            productId: currProduct?.id,
            quantity: 1,
            productColorId: selectedColor,
            productSizeId: selectedSize,
          })
        );
        console.log(resultAction);
      }
    } else {
      alert("Выберите цвет и размер");
    }
  };

  return           <form onSubmit={onHandleCrateCartItem}>
  <div className={styles.pickedColor}>
    цвет:
    {currProduct?.Colors?.find((c) => c.id === selectedColor)
      ?.title || "не выбран"}
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
            border:
              selectedColor === color.id ? "2px solid black" : "none",
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
    <div
      onClick={() => setActives(!active)}
      className={styles.sizingModal}
    >
      Подобрать размер
    </div>
    {active && (
      <ModalWindow active={active} setActive={setActives}>
        <SizesMeasures active={active} setActive={setActives}/>
      </ModalWindow>
    )}
  </div>
  <div className={styles.sizePicker}>
    {currProduct?.ProductSizes?.map((size) => (
      <label key={size.id}>
        <input
          type="radio"
          value={size.id}
          checked={selectedSize === size.id}
          onChange={() => setSelectedSize(size.id)}
        />
        <div
          className={styles.size}
          style={{
            backgroundColor:
              selectedSize === size.id ? "black" : "white",
            color: selectedSize === size.id ? "white" : "black",
          }}
        >
          {size.sizeTitle}
        </div>
      </label>
    ))}
  </div>

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
</form>
}

export default CartItemAddFeature