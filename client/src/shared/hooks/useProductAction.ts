import { useCallback } from "react";
import { useAppDispatch } from "./useReduxHooks";
import {
  deleteProduct,
  getAllProducts,
  getOneProduct,
  Product,
  updateProduct,
} from "@/entities/product";

export const useProductAction = () => {
  const dispatch = useAppDispatch();

  const getProductList = useCallback(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const getProduct = useCallback(
    (id: number) => {
      dispatch(getOneProduct({ id }));
    },
    [dispatch]
  );

  const handleUpdateProduct = useCallback(
    async (id: number, productData: Partial<Product>) => {
      await dispatch(updateProduct([id, productData as Product]));
      dispatch(getOneProduct({ id }));
    },
    [dispatch]
  );

  const handleDeleteProduct = useCallback(
    async (id: number) => {
      await dispatch(deleteProduct({ id }));
      dispatch(getOneProduct({ id }));
    },
    [dispatch]
  );

  return {
    getProductList,
    getProduct,
    handleDeleteProduct,
    handleUpdateProduct,
  };
};
