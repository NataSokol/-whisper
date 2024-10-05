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
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
    </div>
  );
};

export default AdminProductItem;
