import React, { useState } from "react";
import { Category } from "../model";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
// import styles from "./AdminCategoryItem.module.css";

type Props = {
  category: Category;
  onCategoryDelete: (id: number) => void;
  onCategoryUpdate: (id: number, title: string) => void;
};

export const AdminCategoryItem: React.FC<Props> = ({
  category,
  onCategoryDelete,
  onCategoryUpdate,
}) => {
  const [title, setTitle] = useState(category.title);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = async () => {
    setIsEditing(false);
    setTitle(category.title);
  };

  const handleUpdate = async () => {
    onCategoryUpdate(category.id, title);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onCategoryDelete(category.id);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button theme={ThemeButton.SECONDARY} onClick={handleUpdate}>
            Сохранить
          </Button>
          <Button theme={ThemeButton.SECONDARY} onClick={handleCancel}>
            Закрыть
          </Button>
        </>
      ) : (
        <>
          <p>{category.title}</p>
          <Button theme={ThemeButton.SECONDARY} onClick={handleEdit}>
            Изменить
          </Button>
          <Button theme={ThemeButton.DANGER} onClick={handleDelete}>
            Удалить
          </Button>
        </>
      )}
    </div>
  );
};

export default AdminCategoryItem;
