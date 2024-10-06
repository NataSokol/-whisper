import React from "react";
import { AdminCollectionFeature } from "@/features/admin/ui";
import styles from "./AdminCollectionPage.module.css";

const AdminCollections: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Управление коллекциями</h1>
      <AdminCollectionFeature />
    </div>
  );
};

export default AdminCollections;
