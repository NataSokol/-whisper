import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useCategoryActions } from "@/shared/hooks/useCategoryActions";
import { AdminCategoryList, AdminFormCategory } from "@/widgets/AdminWidget";
import ModalWindow from "@/shared/ui/Modal/Modal";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./AdminCategoryFeature.module.css";

export const AdminCategoryFeature: React.FC = () => {
  const { handleDelete, handleUpdate, allCategories } = useCategoryActions();
  const categories = useAppSelector((state) => state.adminCategory.categories);
  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(
    null
  );
  const [newTitle, setNewTitle] = useState<string>("");
  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    allCategories();
  }, [allCategories]);

  const handleUpdateCategory = (categoryId: number) => {
    if (editingCategoryId !== null) {
      handleUpdate(categoryId, newTitle);
      setEditingCategoryId(null);
      setNewTitle("");
      setModalActive(false);
    }
  };

  return (
    <div className={styles.container}>
      <AdminFormCategory />
      <AdminCategoryList
        categories={categories}
        onCategoryDelete={handleDelete}
        onCategoryUpdate={(categoryId) => {
          setEditingCategoryId(categoryId);
          setNewTitle(
            categories.find((cat) => cat.id === categoryId)?.title || ""
          );
          setNewTitle('')
          setModalActive(true);
        }}
      />
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Редактировать категорию</h2>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className={styles.input}
            placeholder="Введите название категории"
          />
          <div className={styles.buttons}>
            <Button
              theme={ThemeButton.LIGHT}
              onClick={() => handleUpdateCategory(editingCategoryId!)}
            >
              Сохранить
            </Button>
            <Button
              theme={ThemeButton.LIGHT}
              onClick={() => setModalActive(false)}
            >
              Закрыть
            </Button>
          </div>
        </div>
      </ModalWindow>
    </div>
  );
};

export default AdminCategoryFeature;
