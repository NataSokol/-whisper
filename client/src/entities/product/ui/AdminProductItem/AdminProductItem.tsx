import React from "react";
import { Product } from "../../model";
import styles from "./AdminProductItem.module.css";

type Props = {
  product: Product;
};

export const AdminProductItem: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.container}>
      <span className={styles.productTitle}>{product.title}</span>
      {product.Images?.length ? ( // Упрощенная проверка
        <img
          src={product.Images[0].url}
          alt={product.title}
          className={styles.productImage}
        />
      ) : (
        <p>Изображение отсутствует</p>
      )}
    </div>
  );
};

export default AdminProductItem;
