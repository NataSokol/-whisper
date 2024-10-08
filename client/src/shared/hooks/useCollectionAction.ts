import { getAllCollections } from "@/entities/collection";
import { useAppDispatch } from "./useReduxHooks";
import { useCallback } from "react";
import {
  createCollection,
  deleteCollection,
  updateCollection,
} from "@/entities/collection/model/collectionThunk";
import { unwrapResult } from "@reduxjs/toolkit";

export const useCollectionAction = () => {
  const dispatch = useAppDispatch();

  const getCollectionList = useCallback(() => {
    dispatch(getAllCollections());
  }, [dispatch]);

  const handleCreateCollection = useCallback(
    async ({ title, image }: { title: string; image: File }) => {
      try {
        const result = await dispatch(createCollection({ title, image }));
        unwrapResult(result);
        dispatch(getAllCollections());
      } catch (error) {
        console.log("Error creating collection", error);
      }
    },
    [dispatch]
  );

  const handleUpdateCollection = useCallback(
    async ({
      id,
      title,
      image,
    }: {
      id: number;
      title: string;
      image?: File | null;
    }) => {
      const result = await dispatch(
        updateCollection({ id, title, image: image || undefined })
      );
      unwrapResult(result);
      dispatch(getAllCollections());
    },
    [dispatch]
  );

  const handleDeleteCollection = useCallback(
    async (id: number) => {
      await dispatch(deleteCollection({ id }));
      dispatch(getAllCollections());
    },
    [dispatch]
  );

  return {
    getCollectionList,
    handleCreateCollection,
    handleUpdateCollection,
    handleDeleteCollection,
  };
};
