import { useCallback } from "react";
import { useAppDispatch } from "./useReduxHooks";
import {
  createColor,
  getAllColors,
  getOneColor,
  updateColor,
} from "@/entities/color/model/colorThunk";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  CreateColorRequest,
  CreateColorResponse,
} from "@/entities/color/model";

export const useColorAction = () => {
  const dispatch = useAppDispatch();

  const getAllColorList = useCallback(() => {
    dispatch(getAllColors());
  }, [dispatch]);

  const getColor = useCallback(
    (id: number) => {
      dispatch(getOneColor({ id }));
    },
    [dispatch]
  );

  const handleCreateColor = useCallback(
    async ({ title, colorCode, productId }: CreateColorRequest) => {
      try {
        const result = await dispatch(
          createColor({ title, colorCode, productId })
        );
        const color: CreateColorResponse = unwrapResult(result);
        dispatch(getAllColors());
        return color;
      } catch (error) {
        console.error("Error creating color", error);
        return null;
      }
    },
    [dispatch]
  );

  const handleUpdateColor = useCallback(
    async (id: number, title: string, code: string) => {
      await dispatch(updateColor({ id, title, code }));
      dispatch(getAllColors());
    },
    [dispatch]
  );

  return {
    getAllColorList,
    getColor,
    handleCreateColor,
    handleUpdateColor,
  };
};
