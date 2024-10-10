import React from "react";
import styles from "./FavoritesList.module.css";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { UserProductItem } from "@/entities/product/ui";

export const FavoritesList: React.FC = () => {
  const likes = useAppSelector((state) => state.user.user?.LikedProducts);
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>ВСЕ ТОВАРЫ</h1>
      </div>
      {user ? (
        <div className={styles.productList}>
          {likes && likes.length > 0 ? (
            likes.map((like) => (
              <UserProductItem key={like.id} product={like} />
            ))
          ) : (
            <h2 className={styles.emptyMessage}>Пока ничего нет</h2>
          )}
        </div>
      ) : (
        <div className={styles.list}>
          <div className={styles.emptyMessage}>
            Зарегистрируйтесь или войдите, чтобы посмотреть избранное
          </div>
        </div>
      )}
    </div>
  );
};
