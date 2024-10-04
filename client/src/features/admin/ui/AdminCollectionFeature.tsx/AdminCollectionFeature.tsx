import React, { useEffect, useState } from "react";
import { useCollectionAction } from "@/shared/hooks/useCollectionAction";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import {
  AdminCollectionList,
  AdminFormCollection,
} from "@/widgets/AdminWidget";
import ModalWindow from "@/shared/ui/Modal/Modal";

export const AdminCollectionFeature: React.FC = () => {
  const { getCollectionList, handleDeleteCollection, handleUpdateCollection } =
    useCollectionAction();
  const collections = useAppSelector((state) => state.collection.collections);
  const [editingCollectionId, setEditingCollectionId] = useState<number | null>(
    null
  );
  const [newTitle, setNewTitle] = useState<string>("");
  const [newImage, setNewImage] = useState<string>("");
  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    getCollectionList();
  }, [getCollectionList]);

  const handleUpdate = (collectionId: number) => {
    if (editingCollectionId !== null) {
      handleUpdateCollection(collectionId, newTitle, newImage);
      setEditingCollectionId(null);
      setNewTitle("");
      setNewImage("");
      setModalActive(false);
    }
  };

  return (
    <div>
      <AdminFormCollection />
      <AdminCollectionList
        collections={collections}
        onCollectionDelete={handleDeleteCollection}
        onCollectionUpdate={(collectionId) => {
          const collectionToEdit = collections.find(
            (col) => col.id === collectionId
          );
          if (collectionToEdit) {
            setEditingCollectionId(collectionId);
            setNewTitle(collectionToEdit.title);
            setNewImage(collectionToEdit.image);
            setModalActive(true);
          }
        }}
      />

      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div>
          <h2>Редактировать коллекцию</h2>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
          />
          <button onClick={() => handleUpdate(editingCollectionId!)}>
            Сохранить
          </button>
          <button onClick={() => setModalActive(false)}>Закрыть</button>
        </div>
      </ModalWindow>
    </div>
  );
};

export default AdminCollectionFeature;
