import React from "react";
import styles from "./AdminProductSizeFeature.module.css";
import { AdminProductSizeList } from "@/widgets/AdminWidget";

export const AdminProductSizeFeature: React.FC = () => {
  return (
    <div className={styles.container}>
      <AdminProductSizeList />
    </div>
  );
};

export default AdminProductSizeFeature;
