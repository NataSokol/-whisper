import React from "react";
import styles from "./FavoriteButton.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import {
  createFavorite,
  deleteFavorite,
} from "@/entities/favorites/model/favoritesThunk";

type Props = {
  productId: number;
};

const FavoriteButton: React.FC<Props> = ({ productId }) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.productId === productId);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFavorite({ productId }));
    } else {
      dispatch(createFavorite({ productId }));
    }
  };

  return (
    <button onClick={handleFavorite} className={styles.button}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.heart} ${
          isFavorite ? styles.filled : styles.outlined
        }`}
      >
        <path d="M20.84 4.61012C20.3292 4.09912 19.7228 3.69376 19.0554 3.4172C18.3879 3.14064 17.6725 2.99829 16.95 2.99829C16.2275 2.99829 15.5121 3.14064 14.8446 3.4172C14.1772 3.69376 13.5708 4.09912 13.06 4.61012L12 5.67012L10.94 4.61012C9.9083 3.57842 8.50903 2.99883 7.05 2.99883C5.59096 2.99883 4.19169 3.57842 3.16 4.61012C2.1283 5.64181 1.54871 7.04108 1.54871 8.50012C1.54871 9.95915 2.1283 11.3584 3.16 12.3901L4.22 13.4501L12 21.2301L19.78 13.4501L20.84 12.3901C21.351 11.8794 21.7563 11.2729 22.0329 10.6055C22.3095 9.93801 22.4518 9.2226 22.4518 8.50012C22.4518 7.77763 22.3095 7.06222 22.0329 6.39476C21.7563 5.7273 21.351 5.12087 20.84 4.61012Z" />
      </svg>
    </button>
  );
};

export default FavoriteButton;
