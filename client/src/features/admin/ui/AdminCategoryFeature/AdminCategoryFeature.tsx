import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useCategoryActions } from "@/shared/hooks/useCategoryActions";
import { AdminCategoryList, AdminFormCategory } from "@/widgets/AdminWidget";
import ModalWindow from "@/shared/ui/Modal/Modal";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";

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
    <div>
      <AdminFormCategory />
      <AdminCategoryList
        categories={categories}
        onCategoryDelete={handleDelete}
        onCategoryUpdate={(categoryId) => {
          setEditingCategoryId(categoryId);
          setNewTitle(
            categories.find((cat) => cat.id === categoryId)?.title || ""
          );
          setModalActive(true);
        }}
      />
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div>
          <h2>Редактировать категорию</h2>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Button theme={ThemeButton.LIGHT} onClick={() => handleUpdateCategory(editingCategoryId!)}>
            Сохранить
          </Button>
          <button onClick={() => setModalActive(false)}>Закрыть</button>
        </div>
      </ModalWindow>
    </div>
  );
};

export default AdminCategoryFeature;
