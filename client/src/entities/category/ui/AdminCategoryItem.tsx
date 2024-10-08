import React from "react";
import { Category } from "../model";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";

// import styles from "./AdminCategoryItem.module.css";

type Props = {
  category: Category;
  onCategoryDelete: (id: number) => Promise<void>;
  onCategoryUpdate: (id: number) => void;
};

export const AdminCategoryItem: React.FC<Props> = ({
  category,
  onCategoryDelete,
  onCategoryUpdate,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{category.title}</span>
      <div>
        <Button
          theme={ThemeButton.LIGHT}
          onClick={() => onCategoryUpdate(category.id)}
        >
          Изменить
        </Button>
        <Button
          theme={ThemeButton.LIGHT}
          onClick={() => onCategoryDelete(category.id)}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default AdminCategoryItem;
