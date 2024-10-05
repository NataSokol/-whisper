import React, { useState } from "react";
import styles from "./ProductPageWidget.module.css";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";

export const ProductPageWidget: React.FC = () => {
  const { currProduct } = useAppSelector((state) => state.product);
  const [descriptionActive, setDescriptionActive] = useState(false);
  const [compositionActive, setCompositionActive] = useState(false);
  // console.log(currProduct);

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

        <div className={styles.colorPicker}>
          {currProduct?.Colors?.map((color) => (
            <div
              className={styles.color}
              style={{
                backgroundColor: color.colorCode,
                width: "40px",
                height: "40px",
              }}
            ></div>
          ))}
        </div>

        <div className={styles.sizePicker}>
          {currProduct?.ProductSizes?.map((size) => (
            <div className={styles.size}>{size.sizeTitle}</div>
          ))}
        </div>

        <button className={styles.cartButton}>добавить в корзину</button>
        <div className={styles.otherInfo}>
          <div className={styles.descriptionItem}>
            <div
              className={styles.accordionTitle}
              onClick={() => setDescriptionActive((prev) => !prev)}
            >
              <div>о товаре</div>
              <div>{descriptionActive ? "-" : "+"}</div>
            </div>
            {descriptionActive && (
              <div className={styles.description}>
                {currProduct?.description}
              </div>
            )}
          </div>

          <div className={styles.compositionItem}>
            <div
              className={styles.accordionTitle}
              onClick={() => setCompositionActive((prev) => !prev)}
            >
              <div>состав и уход</div>
              <div>{compositionActive ? "-" : "+"}</div>
            </div>
            {compositionActive && (
              <div className={styles.composition}>
                {currProduct?.composition}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
