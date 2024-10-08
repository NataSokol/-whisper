import React, { useEffect } from "react";
import styles from "./FavoritesList.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { fetchFavorites } from "@/entities/favorites";
import { FavoriteItem } from "@/entities/favorites/ui";

export const FavoritesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>ВСЕ ТОВАРЫ</h1>
      </div>
      <div className={styles.productList}>
        {favorites.map((favorite) => (
          <FavoriteItem key={favorite.productId} favorite={favorite} />
        ))}
      </div>
    </div>
  );
};
