import React, { useState } from "react";
import { useCollectionAction } from "@/shared/hooks/useCollectionAction";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./AdminFormCollection.module.css";

export const AdminFormCollection: React.FC = () => {
  const { handleCreateCollection } = useCollectionAction();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleCreateCollection({ title, image });
    setTitle("");
    setImage("");
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введите название коллекции"
        />
        <input
          className={styles.input}
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Добавьте фото коллекции"
        />
        <Button type="submit" theme={ThemeButton.PRIMARY}>
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default AdminFormCollection;
