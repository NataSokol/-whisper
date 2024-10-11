import React, { useEffect, useState } from "react";
import styles from "./UserProductItem.module.css";
import { Product } from "../../model";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import FavoriteButton from "@/shared/ui/FavoriteButton/FavoriteButton";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";

type ProductProps = {
  product: Product;
};

export const UserProductItem: React.FC<ProductProps> = ({ product }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (product) {
      setIsLoading(false);
    }
  }, [product]);

  if (isLoading) {
    return <div>Пошла вода горячая...</div>;
  }

  return (
    <div className={styles.container}>
      <div>
        <Link to={`${ROUTES.CATALOG}/${product.id}`}>
          <img
            src={product?.Images?.[0]?.url}
            alt="photo"
            className={styles.image}
          />
        </Link>
      </div>
      <div className={styles.info}>
        <Link to={`${ROUTES.CATALOG}/${product.id}`} className={styles.title}>
          <span>{product.title}</span>
        </Link>
        <span>{product.price}</span>
      </div>
      {user && (
        <div className={styles.like}>
          <FavoriteButton productId={product.id} />
        </div>
      )}
    </div>
  );
};

export default UserProductItem;
