import React from "react";
import { AdminProductFeature } from "@/features/admin/ui";
import styles from "./AdminProductPage.module.css";

export const AdminProductPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Управление продуктами</h1>
      <AdminProductFeature />
    </div>
  );
};

export default AdminProductPage;
