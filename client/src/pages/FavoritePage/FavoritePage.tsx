import React from "react";
import styles from "./FavoritePage.module.css";
import { FavoritesList } from "@/widgets/FavoritesList";

export const FavoritePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <FavoritesList />
    </div>
  );
};

export default FavoritePage;
