import React from "react";
import { AdminCategoryFeature } from "@/features/admin/ui";
import styles from "./AdminCategoryPage.module.css";

const AdminCategoryPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Управление категориями</h1>
      <AdminCategoryFeature />
    </div>
  );
};
export default AdminCategoryPage;
