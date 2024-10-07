import React from "react";
import styles from "./UserProductItem.module.css";
import { Product } from "../../model";

type ProductProps = {
  product: Product;
};

export const UserProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src={product.image} alt="photo" />
        </div>
        <div>
          <span>{product.title}</span>
          <span>{product.price}</span>
        </div>
        <div>
          <img src="../../../../public/img/favorites.svg" alt="like" />
        </div>
      </div>
    </>
  );
};

export default UserProductItem;
