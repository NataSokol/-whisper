import React, { useEffect } from "react";
import styles from "./UserProductList.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { getAllProducts } from "@/entities/product";
import { UserProductItem } from "@/entities/product/ui";

export const UserProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log(products);
  

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div key={product.id}>
          <UserProductItem product={product} />
        </div>
      ))}
    </div>
  );
};
