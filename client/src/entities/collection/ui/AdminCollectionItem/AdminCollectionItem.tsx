import React from "react";
import { Collection } from "../../model";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./AdminCollectionItem.module.css";

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
  
  // const imagePath = `http://localhost:3000${collection.image}`
  const imagePath = `${window.location.origin}${collection.image}`;
  // console.log(imagePath);

  return (
    <div className={styles.container}>
      <span className={styles.collectionTitle}>{collection.title}</span>
      <img
        src={imagePath}
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
