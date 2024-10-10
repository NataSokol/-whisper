import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import styles from "./Slider.module.css";

type Props = {
  images: string[];
  collectionTitle: string[];
  collectionId: number[];
};

export const Slider: React.FC<Props> = ({
  images,
  collectionTitle,
  collectionId,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNextActive, setIsNextActive] = useState(true);
  const itemsPerPage = 1;

  const goToNext = () => {
    if (currentIndex + itemsPerPage < Math.min(images.length, maxCollections)) {
      setCurrentIndex((prev) => prev + itemsPerPage);
    }
    setIsNextActive(true);
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - itemsPerPage);
    }
    setIsNextActive(false);
  };

  const maxCollections = 3;

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slidesContainer}
        style={{
          transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`,
        }}
      >
        {images.map((image, i) => (
          <div key={i} className={styles.slide}>
            <img
              src={image}
              alt={`Image ${i}`}
              className={styles.collectionImage}
            />
            <div className={styles.container}>
              <div className={styles.collectionInfo}>
                <h2 className={styles.collectionTitle}>{collectionTitle[i]}</h2>
                <Link
                  to={`${ROUTES.COLLECTION}/${collectionId[i]}`}
                  className={styles.collectionLink}
                >
                  Посмотреть
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        {images.length > 0 && (
          <>
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0 && isNextActive}
              className={styles.arrowButton}
            >
              <img src="../../public/img/vector.svg" alt="arrow" />
            </button>
            <button
              onClick={goToNext}
              disabled={
                currentIndex + itemsPerPage >= images.length && isNextActive
              }
              className={styles.arrowButton}
            >
              <img
                src="../../public/img/vector.svg"
                alt="arrow"
                style={{ transform: "rotate(180deg)" }}
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Slider;
