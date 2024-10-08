import React, { useState } from "react";
import { useCollectionAction } from "@/shared/hooks/useCollectionAction";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./AdminFormCollection.module.css";

export const AdminFormCollection: React.FC = () => {
  const { handleCreateCollection } = useCollectionAction();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (image) {
      await handleCreateCollection({ title, image });
      setTitle("");
      setImage(null);
    } else {
      alert("Загрузите изображение");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
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
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          placeholder="Добавьте фото коллекции"
        />
        <Button type="submit" theme={ThemeButton.LIGHT}>
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default AdminFormCollection;
