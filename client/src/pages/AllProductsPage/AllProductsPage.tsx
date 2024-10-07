import React from "react";
import styles from "./AllProductsPage.module.css";
import { UserProductList } from "@/widgets/UserProductList";
import { FilterBar } from "@/widgets/FilterBar";

export const AllProductsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <FilterBar />
      <UserProductList />
    </div>
  );
};

export default AllProductsPage;
