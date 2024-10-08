import React from "react";
import styles from "./AdminOneProductPage.module.css";
import {
  AdminOneProductFeature,
  AdminProductSizeFeature,
} from "@/features/admin/ui";
import { AdminFormProductSize } from "@/widgets/AdminWidget";

export const AdminOneProductPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Управление продуктом</h1>
      <AdminOneProductFeature />
      <AdminProductSizeFeature />
      <AdminFormProductSize />
    </div>
  );
};

export default AdminOneProductPage;
