import React, { useEffect } from "react";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useCategoryActions } from "@/shared/hooks/useCategoryActions";
import AdminCategoryItem from "@/entities/category/ui/AdminCategoryItem";

import styles from "./AdminCategoryList.module.css";

export const AdminCategoryList: React.FC = () => {
  const { allCategories, handleDelete, handleUpdate } = useCategoryActions();
  const categories = useAppSelector((state) => state.adminCategory.categories);

  useEffect(() => {
    allCategories();
  }, [allCategories]);
  
  return (
    <div className={styles.categoryListContainer}>
      {categories.map((category) => (
        <div key={category.id} className={styles.categoryContainer}>
          <AdminCategoryItem
            category={category}
            onCategoryDelete={handleDelete}
            onCategoryUpdate={handleUpdate}
          />
        </div>
      ))}
    </div>
  );
};
