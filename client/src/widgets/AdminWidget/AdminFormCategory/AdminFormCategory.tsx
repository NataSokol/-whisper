import React, { useState } from "react";
import { useCategoryActions } from "@/shared/hooks/useCategoryActions";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import { message } from "antd";
import styles from "./AdminFormCategory.module.css";

export const AdminFormCategory: React.FC = () => {
  const { handleCreate } = useCategoryActions();
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title === "") {
      message.error("Заполните название категории");
    }

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
        <Button type="submit" theme={ThemeButton.LIGHT}>
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default AdminFormCategory;
