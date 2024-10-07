import React from "react";
import { AdminProductSizeItem } from "@/entities/productsize";
import styles from "./AdminProductSizeList.module.css";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";

export const AdminProductSizeList: React.FC = () => {
  const product = useAppSelector((state) => state.product.currProduct);
  const productSize = product?.ProductSizes[0];
  
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <h3>Доступные размеры:</h3>
        {productSize ? (
          <AdminProductSizeItem productSize={productSize} />
        ) : (
          <p>Размер продукта не найден.</p>
        )}
      </div>
    </div>
  );
};

export default AdminProductSizeList;

// const { id } = useParams<{ id: string }>();
// const { getProductSize, getProductSizeList } = useProductSizeActions();