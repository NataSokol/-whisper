import React from "react";
import { Collection } from "../../model";
import styles from "./AdminCollectionItem.module.css";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";

type Props = {
  collection: Collection;
  onCollectionDelete: (id: number) => Promise<void>;
  onCollectionUpdate: (id: number) => void;
};

export const AdminCollectionItem: React.FC<Props> = ({
  collection,
  onCollectionDelete,
  onCollectionUpdate,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.collectionTitle}>{collection.title}</span>
      <img
        src={collection.image}
        alt={collection.title}
        className={styles.collectionImage}
      />
      <div>
        <Button
          theme={ThemeButton.PRIMARY}
          onClick={() => onCollectionUpdate(collection.id)}
        >
          Изменить
        </Button>
        <Button
          theme={ThemeButton.DANGER}
          onClick={() => {
            onCollectionDelete(collection.id);
          }}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default AdminCollectionItem;
