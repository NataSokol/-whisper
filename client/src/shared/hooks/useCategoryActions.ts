import { useCallback } from "react";
import { useAppDispatch } from "./useReduxHooks";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "@/entities/category";
import { unwrapResult } from '@reduxjs/toolkit';

export const useCategoryActions = () => {
  const dispatch = useAppDispatch();

  const allCategories = useCallback(() => {
    dispatch(getAllCategory());
  }, [dispatch]);


  const handleCreate = useCallback(
    async (title: string) => {
      try {
        const resultAction = await dispatch(createCategory({ title }));
        unwrapResult(resultAction);
        dispatch(getAllCategory()); // Обновляем список категорий
      } catch (error) {
        console.log("Error creating category", error);
      }
    },
    [dispatch]
  );

  const handleUpdate = useCallback(
    async (id: number, title: string) => {
      await dispatch(updateCategory({ id, title }));
      dispatch(getAllCategory()); // Обновляем список категорий
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    async (id: number) => {
      await dispatch(deleteCategory({ id }));
      dispatch(getAllCategory()); // Обновляем список категорий
    },
    [dispatch]
  );

  return {
    allCategories,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
};
