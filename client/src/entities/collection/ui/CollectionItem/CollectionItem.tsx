import React from "react";
import styles from "./CollectionItem.module.css";
import { Collection } from "../../model";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";

type CollectionItemProps = {
  collection: Collection;
};

export const CollectionItem: React.FC<CollectionItemProps> = ({
  collection,
}) => {
  return (
    <Link to={`${ROUTES.COLLECTION}/${collection.id}`} className={styles.container}>
      <img
        className={styles.collectionImage}
        src={collection.image}
        alt="коллекция"
      />
      <div className={styles.collectionInfo}>
      <div className={styles.collectionTitle}>{collection.title.toUpperCase()}</div>
      <div
        className={styles.collectionLink}
      >
        Посмотреть
      </div>
      </div>
    </Link>
  );
};
