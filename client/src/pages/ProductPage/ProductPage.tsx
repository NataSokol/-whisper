import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "@/shared/hooks/useReduxHooks";
import { getOneProduct } from "@/entities/product/model/productThunk";
import { ProductPageWidget } from "@/widgets/ProductPageWidget";

// import styles from "./ProductPage.module.css";

export const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(getOneProduct({ id: +productId }));
    }
  }, [dispatch, productId]);
  return <ProductPageWidget />;
};

export default ProductPage;
