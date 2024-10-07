import React from "react";
import { AdminProductItem, ProductList } from "@/entities/product";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import { useProductAction } from "@/shared/hooks/useProductAction";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import styles from "./AdminProductList.module.css";

type Props = {
  products: ProductList;
};

export const AdminProductList: React.FC<Props> = ({ products }) => {
  const { getProduct } = useProductAction();

  const onProductClick = (id: number) => {
    getProduct(id);
  };

  return (
    <div className={styles.productListContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.productContainer}>
          <AdminProductItem product={product} />
          <Link to={`${ROUTES.ADMIN_PRODUCTS}/${product.id}`}>
            <Button
              type="submit"
              theme={ThemeButton.SECONDARY}
              onClick={() => onProductClick(product.id)}
            >
              Подробнее
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AdminProductList;
