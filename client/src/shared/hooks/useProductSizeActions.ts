import { useCallback } from "react";
import { useAppDispatch } from "./useReduxHooks";
import {
  createProductSize,
  CreateProductSizeRequest,
  deleteProductSize,
  getAllProductSizes,
  getOneProductSize,
  ProductSize,
  updateProductSize,
} from "@/entities/productsize";
import { unwrapResult } from "@reduxjs/toolkit";

export const useProductSizeActions = () => {
  const dispatch = useAppDispatch();

  const getProductSizeList = useCallback(() => {
    dispatch(getAllProductSizes());
  }, [dispatch]);

  const getProductSize = useCallback(
    async (id: number) => {
      await dispatch(getOneProductSize({ id }));
      dispatch(getAllProductSizes());
    },
    [dispatch]
  );

  const handleCreateProductSize = useCallback(
    async ({
      productId,
      sizeTitle,
      length,
      width,
      chestGirth,
      chestUnderGirth,
      externalSeamLength,
      frontLength,
      hipGirth,
      innerSeamLength,
      waistGirth,
      sleeveLength,
      quantity,
    }: CreateProductSizeRequest) => {
      try {
        const result = await dispatch(
          createProductSize({
            productId: Number(productId),
            sizeTitle,
            length,
            width,
            chestGirth,
            chestUnderGirth,
            externalSeamLength,
            frontLength,
            hipGirth,
            innerSeamLength,
            waistGirth,
            sleeveLength,
            quantity,
          })
        );
        unwrapResult(result);
        dispatch(getAllProductSizes());
      } catch (error) {
        console.error("Failed to create product size:", error);
      }
    },
    [dispatch]
  );

  const handleUpdateProductSize = useCallback(
    async (id: number, size: Partial<ProductSize>) => {
      await dispatch(updateProductSize([id, size as ProductSize]));
      dispatch(getAllProductSizes());
    },
    [dispatch]
  );

  const handleDeleteProductSize = useCallback(
    async (id: number) => {
      await dispatch(deleteProductSize({ id }));
    },
    [dispatch]
  );

  return {
    handleUpdateProductSize,
    handleDeleteProductSize,
    getProductSizeList,
    getProductSize,
    handleCreateProductSize,
  };
};
