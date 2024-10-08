import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { AdminProductSizeItem, ProductSize } from "@/entities/productsize";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./AdminProductSizeList.module.css";

interface AdminProductSizeListProps {
  onEditSize: (size: ProductSize) => void;
}

export const AdminProductSizeList: React.FC<AdminProductSizeListProps> = ({
  onEditSize,
}) => {
  const { id } = useParams<{ id: string }>();
  const product = useAppSelector((state) => state.product.currProduct);

  const productSizes =
    product && product.ProductSizes ? product.ProductSizes : [];

  const productSize = productSizes.find((size) => size.id === Number(id));

  return (
    <div className={styles.container}>
      <h3>Доступные размеры:</h3>
      {productSizes.map((size) => (
        <AdminProductSizeItem key={size.id} productSize={size} />
      ))}
      {productSize && (
        <Button
          theme={ThemeButton.LIGHT}
          onClick={() => onEditSize(productSize)}
        >
          Изменить размер
        </Button>
      )}
    </div>
  );
};

export default AdminProductSizeList;
