import React, { useState } from "react";
import { ImageList } from "@/entities/image";
import styles from "./SliderProduct.module.css";

type Props = {
  productImages: ImageList;
};

export const SliderProduct: React.FC<Props> = ({ productImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slidesContainer}>
        <div className={styles.slidesContainerImg}>
          <img
            className={styles.imageContainer}
            src={productImages[currentIndex]?.url}
            alt="фото товара"
          />
        </div>
        <div className={styles.thumbnailsContainer}>
          {productImages.map((image, index) => (
            <img
              key={index}
              className={`${styles.thumbnail} ${
                currentIndex === index ? styles.activeThumbnail : ""
              }`}
              src={image.url}
              alt={`миниатюра ${index + 1}`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderProduct;
