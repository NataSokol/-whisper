import React from "react";
import styles from "./CollectionItem.module.css";
import { Collection } from "../../model";
import { Link } from "react-router-dom";
import { getCollectionRoute } from "@/app/router/routes";

type CollectionItemProps = {
  collection: Collection;
};

export const CollectionItem: React.FC<CollectionItemProps> = ({
  collection,
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.collectionImage}
        src={collection.image}
        alt="коллекция"
      />
      <div className={styles.collectionInfo}>
      <div className={styles.collectionTitle}>{collection.title}</div>
      <Link
        className={styles.collectionLink}
        to={getCollectionRoute(collection.id)}
      >
        Посмотреть
      </Link>
      </div>
    </div>
  );
};
