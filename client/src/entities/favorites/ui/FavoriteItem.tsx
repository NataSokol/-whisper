import React, { useEffect } from "react";
import styles from "./FavoriteItem.module.css";
import { useAppDispatch } from "@/shared/hooks/useReduxHooks";
import FavoriteButton from "@/shared/ui/FavoriteButton/FavoriteButton";
import { Favorites, fetchFavorites } from "@/entities/favorites";

type ProductProps = {
  favorite: Favorites;
};

export const FavoriteItem: React.FC<ProductProps> = ({ favorite }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2>{favorite.Product.title}</h2>
      {/* <img src={favorite.Product?.Images[0]?.url} alt="" /> */}
      <FavoriteButton productId={favorite.Product.id}/>
    </div>
  );
};

export default FavoriteItem;
