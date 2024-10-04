import React from "react";
import { AdminCategoryList, AdminFromCategory } from "@/widgets/AdminWidget";

import styles from "./AdminCategoryPage.module.css";

const AdminCategoryPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container}>Управление категориями</h1>
      <AdminFromCategory />
      <AdminCategoryList />
    </div>
  );
};
export default AdminCategoryPage;
