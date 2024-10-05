import React from "react";
import styles from "./AdminProductList.module.css";
import { AdminProductItem, ProductList } from "@/entities/product";

type Props = {
  products: ProductList;
};

export const AdminProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles.productListContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.productContainer}>
          <AdminProductItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default AdminProductList;
