import React from "react";
import { Subcategory } from "../../model";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";

// import styles from "./AdminSubCategoryItem.module.css";

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{subcategory.title}</span>
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
