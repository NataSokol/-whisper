import React from "react";
import { AdminCollectionItem, CollectionList } from "@/entities/collection";
import styles from "./AdminCollectionList.module.css";

type Props = {
  collections: CollectionList;
  onCollectionDelete: (id: number) => Promise<void>;
  onCollectionUpdate: (collectionId: number) => void;
};

export const AdminCollectionList: React.FC<Props> = ({
  collections,
  onCollectionDelete,
  onCollectionUpdate,
}) => {
  return (
    <div className={styles.collectionListContainer}>
      {collections.map((collection) => (
        <div key={collection.id} className={styles.collectionContainer}>
          <AdminCollectionItem
            collection={collection}
            onCollectionDelete={onCollectionDelete}
            onCollectionUpdate={onCollectionUpdate}
          />
        </div>
      ))}
    </div>
  );
};

export default AdminCollectionList;
