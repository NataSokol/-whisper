import React, { useState } from "react";
import { useSubCategoryAction } from "@/shared/hooks/useSubCategoryAction";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./AdminFormSubCategory.module.css";

export const AdminFormSubCategory: React.FC = () => {
  const { handleCreateSubCategory } = useSubCategoryAction();
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleCreateSubCategory({ title });
    setTitle("");
  };
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
          placeholder="Введите название подкатегории"
        />
        <Button type="submit" theme={ThemeButton.LIGHT}>
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default AdminFormSubCategory;
