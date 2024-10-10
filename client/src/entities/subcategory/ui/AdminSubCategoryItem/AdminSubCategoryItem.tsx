import React from "react";
import { Subcategory } from "../../model";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./AdminSubCategoryItem.module.css";

type Props = {
  subcategory: Subcategory;
  onSubcategoryDelete: (id: number) => void;
  onSubcategoryUpdate: (id: number) => void;
};

export const AdminSubCategoryItem: React.FC<Props> = ({
  subcategory,
  onSubcategoryDelete,
  onSubcategoryUpdate,
}) => {
  return (
    <div className={styles.subcategoryContainer}>
      <span className={styles.subcategoryTitle}>{subcategory.title}</span>
      <Button
        theme={ThemeButton.LIGHT}
        onClick={() => onSubcategoryUpdate(subcategory.id)}
      >
        Изменить
      </Button>
      <Button
        theme={ThemeButton.LIGHT}
        onClick={() => onSubcategoryDelete(subcategory.id)}
      >
        Удалить
      </Button>
    </div>
  );
};

export default AdminSubCategoryItem;
