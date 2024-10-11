import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useSubCategoryAction } from "@/shared/hooks/useSubCategoryAction";
import {
  AdminFormSubCategory,
  AdminSubCategoryList,
} from "@/widgets/AdminWidget";
import ModalWindow from "@/shared/ui/Modal/Modal";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./AdminSubCategoryFeature.module.css";

export const AdminSubCategoryFeature: React.FC = () => {
  const {
    getAllSubcategoryList,
    handleDeleteSubCategory,
    handleUpdateSubCategory,
  } = useSubCategoryAction();
  const subcategories = useAppSelector(
    (state) => state.subcategory.subcategories
  );
  const [editingSubCategoryId, setEditingSubCategoryId] = useState<
    number | null
  >(null);
  const [title, setTitle] = useState<string>("");
  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    getAllSubcategoryList();
  }, [getAllSubcategoryList]);

  const handleUpdate = (id: number) => {
    if (editingSubCategoryId !== null) {
      handleUpdateSubCategory(id, title);
      setEditingSubCategoryId(null);
      setTitle("");
      setModalActive(false);
    }
  };

  return (
    <div className={styles.container}>
      <AdminFormSubCategory />
      <AdminSubCategoryList
        subcategories={subcategories}
        onSubcategoryDelete={handleDeleteSubCategory}
        onSubcategoryUpdate={(id) => {
          setEditingSubCategoryId(id);
          setTitle(subcategories.find((sub) => sub.id === id)?.title ?? "");
          setModalActive(true);
          setTitle("");
        }}
      />
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Редактировать подкатегорию</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            placeholder="Введите название подкатегории"
          />
          <div className={styles.buttons}>
            <Button
              theme={ThemeButton.LIGHT}
              onClick={() => handleUpdate(editingSubCategoryId!)}
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

export default AdminSubCategoryFeature;
