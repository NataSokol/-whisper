import React, { useState } from "react";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import styles from "./ProductPageWidget.module.css";
import { CartItemAddFeature } from '@/features/cart/CartItemFeature';
import { useNavigate } from 'react-router-dom';

export const ProductPageWidget: React.FC = () => {
  const { currProduct } = useAppSelector((state) => state.product);
  const navigate = useNavigate();

  const [descriptionActive, setDescriptionActive] = useState(false);
  const [compositionActive, setCompositionActive] = useState(false);
  
  return (
    <>
      <div className={styles.linkBack} onClick={() => navigate(-1)}>
        назад
      </div>
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
          <CartItemAddFeature />
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
    </>
  );
};
