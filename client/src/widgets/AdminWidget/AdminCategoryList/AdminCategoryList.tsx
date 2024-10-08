import React from "react";
import AdminCategoryItem from "@/entities/category/ui/AdminCategoryItem";
import { CategoryList } from "@/entities/category/model";

import styles from "./AdminCategoryList.module.css";

type Props = {
  categories: CategoryList;
  onCategoryDelete: (id: number) => Promise<void>;
  onCategoryUpdate: (id: number) => void;
};

export const AdminCategoryList: React.FC<Props> = ({
  categories,
  onCategoryDelete,
  onCategoryUpdate,
}) => {
  return (
    <div className={styles.categoryListContainer}>
      {categories.map((category) => (
        <div key={category.id} className={styles.categoryContainer}>
          <AdminCategoryItem
            category={category}
            onCategoryDelete={onCategoryDelete}
            onCategoryUpdate={onCategoryUpdate}
          />
        </div>
      ))}
    </div>
  );
};
