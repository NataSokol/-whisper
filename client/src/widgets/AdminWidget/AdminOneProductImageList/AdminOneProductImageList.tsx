import React from "react";
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./AdminOneProductImageList.module.css";

export const AdminOneProductImageList: React.FC = () => {
  const product = useAppSelector((state) => state.product.currProduct);
  return (
    <div className={styles.container}>
      {product && product.Images && product.Images.length > 0 ? (
        <div>
          {product.Images.map((image, i) => (
            <img className={styles.image} key={i} src={image.url} alt={`image`} />
          ))}
        </div>
      ) : (
        <p>Нет изображений</p>
      )}
    </div>
  );
};

export default AdminOneProductImageList;
