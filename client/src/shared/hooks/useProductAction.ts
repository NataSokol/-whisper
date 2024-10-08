import { useCallback } from "react";
import { useAppDispatch } from "./useReduxHooks";
import {
  createProduct,
  CreateProductRequest,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  Product,
  updateProduct,
} from "@/entities/product";
import { unwrapResult } from "@reduxjs/toolkit";

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

  const handleCreateProduct = useCallback(
    async ({
      title,
      images,
      description,
      composition,
      price,
      collectionId,
      categoryId,
      subcategoryId,
    }: CreateProductRequest) => {
      try {
        const result = await dispatch(
          createProduct({
            title,
            images,
            description,
            composition,
            price,
            collectionId,
            categoryId,
            subcategoryId,
          })
        );
        unwrapResult(result);
        dispatch(getAllProducts());
      } catch (error) {
        console.log("Error creating product", error);
      }
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
    handleCreateProduct,
  };
};