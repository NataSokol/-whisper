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
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    getCollectionList();
  }, [getCollectionList]);

  const handleUpdate = (collectionId: number) => {
    if (editingCollectionId !== null) {
      handleUpdateCollection({
        id: collectionId,
        title: title,
        image: image,
      });
      setEditingCollectionId(null);
      setTitle("");
      setImage(null);
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
            setTitle(collectionToEdit.title);
            setImage(null);
            setModalActive(true);
          }
        }}
      />

      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div>
          <h2>Редактировать коллекцию</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setImage(e.target.files[0]);
              }
            }}
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
