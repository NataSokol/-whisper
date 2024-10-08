import React from "react";
import { AdminSubCategoryItem, SubcategoryList } from "@/entities/subcategory";
import styles from "./AdminSubCategoryList.module.css";

type Props = {
  subcategories: SubcategoryList;
  onSubcategoryDelete: (id: number) => void;
  onSubcategoryUpdate: (id: number) => void;
};

export const AdminSubCategoryList: React.FC<Props> = ({
  subcategories,
  onSubcategoryDelete,
  onSubcategoryUpdate,
}) => {
  return (
    <div className={styles.subCategoryListContainer}>
      {subcategories.map((subcategory) => (
        <div key={subcategory.id} className={styles.subCategoryContainer}>
          <AdminSubCategoryItem
            subcategory={subcategory}
            onSubcategoryDelete={onSubcategoryDelete}
            onSubcategoryUpdate={onSubcategoryUpdate}
          />
        </div>
      ))}
    </div>
  );
};

export default AdminSubCategoryList;
