import React, { useEffect } from "react";
import styles from "./CollectionList.module.css";
import { CollectionItem } from "@/entities/collection/ui/CollectionItem/CollectionItem";
import { useCollectionAction } from "@/shared/hooks/useCollectionAction";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";

export const CollectionList: React.FC = ({}) => {
  const state = useAppSelector((state) => state.collection);

  const { getCollectionList } = useCollectionAction();

  useEffect(() => {
    getCollectionList();
  }, []);

  return (
    <div className={styles.container}>
      {state.collections?.map((collection) => (
        <CollectionItem key={collection.id} collection={collection} />
      ))}
    </div>
  );
};
