import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useSubCategoryAction } from "@/shared/hooks/useSubCategoryAction";
import ModalWindow from "@/shared/ui/Modal/Modal";
import {
  AdminFormSubCategory,
  AdminSubCategoryList,
} from "@/widgets/AdminWidget";
import React, { useEffect, useState } from "react";

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
    <div>
      <AdminFormSubCategory />
      <AdminSubCategoryList
        subcategories={subcategories}
        onSubcategoryDelete={handleDeleteSubCategory}
        onSubcategoryUpdate={(id) => {
          setEditingSubCategoryId(id);
          setTitle(subcategories.find((sub) => sub.id === id)?.title ?? "");
          setModalActive(true);
        }}
      />
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div>
          <h2>Редактировать подкатегорию</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={() => handleUpdate(editingSubCategoryId!)}>
            Сохранить
          </button>
          <button onClick={() => setModalActive(false)}>Закрыть</button>
        </div>
      </ModalWindow>
    </div>
  );
};

export default AdminSubCategoryFeature;
