import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductAction } from "@/shared/hooks/useProductAction";
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./AdminOneProductList.module.css";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import { ROUTES } from "@/app/router/routes";
import { Product } from "@/entities/product";

type Props = {
  onUpdateProduct: (id: number, product: Product) => Promise<void>;
  openModal: (product: Product) => void;
};

export const AdminOneProductList: React.FC<Props> = ({ openModal }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProduct, handleDeleteProduct } = useProductAction();
  const product = useAppSelector((state) => state.product.currProduct);

  useEffect(() => {
    getProduct(Number(id));
  }, [getProduct, id]);

  const onDeleteProduct = async () => {
    if (product) {
      await handleDeleteProduct(product.id);
      navigate(ROUTES.ADMIN_PRODUCTS);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        {product ? (
          <>
            <h2>{product.title}</h2>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.composition}>{product.composition}</p>
            <p className={styles.salePrice}>{product.salePrice}</p>
            <p>{product.Collection?.title}</p>
            <p>{product.Category?.title}</p>
          </>
        ) : (
          <p>Ошибка</p>
        )}

        <Button
          theme={ThemeButton.PRIMARY}
          onClick={() => product && openModal(product)}
        >
          Изменить
        </Button>
        <Button theme={ThemeButton.DANGER} onClick={onDeleteProduct}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default AdminOneProductList;
