import { useCallback } from "react";
import { useAppDispatch } from "./useReduxHooks";
import {
  createSubcategory,
  deleteSubcategory,
  getAllSubcategories,
  updateSubcategory,
} from "@/entities/subcategory";

export const useSubCategoryAction = () => {
  const dispatch = useAppDispatch();

  const getAllSubcategoryList = useCallback(() => {
    dispatch(getAllSubcategories());
  }, [dispatch]);

  const handleCreateSubCategory = useCallback(
    async ({ title }: { title: string }) => {
      await dispatch(createSubcategory({ title }));
      dispatch(getAllSubcategories());
    },
    [dispatch]
  );

  const handleUpdateSubCategory = useCallback(
    async (id: number, title: string) => {
      await dispatch(updateSubcategory({ id, title }));
      dispatch(getAllSubcategories());
    },
    [dispatch]
  );

  const handleDeleteSubCategory = useCallback(
    async (id: number) => {
      await dispatch(deleteSubcategory({ id }));
      dispatch(getAllSubcategories());
    },
    [dispatch]
  );

  return {
    getAllSubcategoryList,
    handleDeleteSubCategory,
    handleUpdateSubCategory,
    handleCreateSubCategory,
  };
};
