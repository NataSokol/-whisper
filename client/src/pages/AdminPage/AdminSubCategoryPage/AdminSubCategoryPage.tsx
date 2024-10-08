import React from "react";
import styles from "./AdminSubCategoryPage.module.css";
import { AdminSubCategoryFeature } from "@/features/admin/ui";

export const AdminSubCategoryPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Управление подкатегориями</h1>
      <AdminSubCategoryFeature />
    </div>
  );
};

export default AdminSubCategoryPage;
