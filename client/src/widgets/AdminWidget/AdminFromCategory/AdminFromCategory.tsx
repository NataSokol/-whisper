import React, { useState } from "react";
import { useCategoryActions } from "@/shared/hooks/useCategoryActions";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./AdminFromCategory.module.css";

export const AdminFromCategory: React.FC = () => {
  const { handleCreate } = useCategoryActions(); 
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleCreate(title); 
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
          placeholder="Введите название категории"
        />
        <Button type="submit" theme={ThemeButton.PRIMARY}>
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default AdminFromCategory;
