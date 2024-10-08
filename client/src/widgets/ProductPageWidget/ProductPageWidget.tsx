import React, { useState } from "react";
import styles from "./ProductPageWidget.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { Color } from "@/entities/color";
import { ProductSize } from "@/entities/productsize";

export const ProductPageWidget: React.FC = () => {
  const { currProduct } = useAppSelector((state) => state.product);
  const [descriptionActive, setDescriptionActive] = useState(false);
  const [compositionActive, setCompositionActive] = useState(false);

  const [selectedColor, setSelectedColor] = useState<Color["id"]>();
  const [selectedSize, setSelectedSize] = useState<ProductSize["id"]>();

  const onHandleCrateCartItem = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <img
          className={styles.imageContainer}
          src={currProduct?.Images[0]?.url}
          alt="фото товара"
        />
        <div className={styles.imgCarousel}></div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.mainInfo}>
          <div>{currProduct?.title}</div>
          <div className={styles.price}>
            <div>{currProduct?.price}</div>
            <div>{currProduct?.salePrice}</div>
          </div>
        </div>

        <form onSubmit={onHandleCrateCartItem}>
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
                  className={styles.color}
                  style={{
                    backgroundColor: color.colorCode,
                    padding: "2px",
                    border:
                      selectedColor === color.id ? "2px solid black" : "none",
                  }}
                ></div>
                {color.title}
              </label>
            ))}
          </div>

          <div className={styles.sizePicker}>
            {currProduct?.ProductSizes?.map((size) => (
              <label key={size.id}>
                <input
                  type="radio"
                  value={size.id}
                  checked={selectedColor === size.id}
                  onChange={() => setSelectedSize(size.id)}
                />
                <div
                  className={styles.size}
                  style={{
                    border:
                    selectedSize === size.id ? "2px solid black" : "none",
                  }}
                >{size.sizeTitle}</div>
              </label>
            ))}
          </div>

          <button type="submit" className={styles.cartButton}>
            добавить в корзину
          </button>
        </form>

        <div className={styles.otherInfo}>
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionTitle}
              onClick={() => setDescriptionActive((prev) => !prev)}
            >
              <div>о товаре</div>
              <img
                className={`${styles.icon} ${
                  descriptionActive ? styles.rotate : ""
                }`}
                src="../../public/img/plus.svg"
                alt={descriptionActive ? "Свернуть" : "Развернуть"}
              />
            </div>
            <div
              className={`${styles.accordionBody} ${
                descriptionActive ? styles.active : ""
              }`}
            >
              {currProduct?.description}
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div
              className={styles.accordionTitle}
              onClick={() => setCompositionActive((prev) => !prev)}
            >
              <div>состав и уход</div>
              <img
                className={`${styles.icon} ${
                  compositionActive ? styles.rotate : ""
                }`}
                src="../../public/img/plus.svg"
                alt={compositionActive ? "Свернуть" : "Развернуть"}
              />
            </div>
            <div
              className={`${styles.accordionBody} ${
                compositionActive ? styles.active : ""
              }`}
            >
              {currProduct?.composition}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};