import { useCallback } from "react";
import { useAppDispatch } from "./useReduxHooks";
import {
  deleteProductSize,
  ProductSize,
  updateProductSize,
} from "@/entities/productsize";
import {
  getAllProductSizes,
  getOneProductSize,
} from "@/entities/productsize/model/productSizeThunk";

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
  };
};
