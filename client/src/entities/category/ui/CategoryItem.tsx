import React, { useState } from "react";
import { Category } from "@/entities/category";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";

type Props = {
  category: Category;
  onCategoryDelete?: (id: number) => void;
  onCategoryUpdate: (id: number, title: string) => void;
};

export const CategoryItem: React.FC<Props> = ({
  category,
  onCategoryUpdate,
  onCategoryDelete,
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
    if (onCategoryDelete) {
      onCategoryDelete(category.id);
    }
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
          {onCategoryDelete && (
            <Button theme={ThemeButton.DANGER} onClick={handleDelete}>
              Удалить
            </Button>
          )}
        </>
      )}
    </div>
  );
};
