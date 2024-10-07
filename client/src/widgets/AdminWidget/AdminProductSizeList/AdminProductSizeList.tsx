import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { AdminProductSizeItem } from "@/entities/productsize";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./AdminProductSizeList.module.css";

export const AdminProductSizeList: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useAppSelector((state) => state.product.currProduct);

  // Проверка что product и его размеры определены
  const productSize =
    product &&
    product.ProductSizes &&
    product.ProductSizes.find((size) => size.id === Number(id));

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <h3>Доступные размеры:</h3>
        {productSize && <AdminProductSizeItem productSize={productSize} />}
      </div>
      <Button theme={ThemeButton.PRIMARY}>Изменить размер</Button>
    </div>
  );
};

export default AdminProductSizeList;
