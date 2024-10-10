import React from "react";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { AdminProductSizeItem, ProductSize } from "@/entities/productsize";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./AdminProductSizeList.module.css";

interface Props {
  onEditSize: (size: ProductSize) => void;
}

export const AdminProductSizeList: React.FC<Props> = ({
  onEditSize,
}) => {
  const product = useAppSelector((state) => state.product.currProduct);

  const productSizes =
    product && product.ProductSizes ? product.ProductSizes : [];

  return (
    <div className={styles.container}>
      <h3>Доступные размеры:</h3>
      {productSizes.length > 0 ? (
        <>
          {productSizes.map((size) => (
            <AdminProductSizeItem key={size.id} productSize={size} />
          ))}
          <Button
            theme={ThemeButton.LIGHT}
            onClick={() => onEditSize(productSizes[0])}
          >
            Изменить размеры
          </Button>
        </>
      ) : (
        <p>Нет доступных размеров для этого продукта.</p>
      )}
    </div>
  );
};

export default AdminProductSizeList;
