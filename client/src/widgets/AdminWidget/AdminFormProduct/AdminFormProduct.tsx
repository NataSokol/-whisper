import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useCategoryActions } from "@/shared/hooks/useCategoryActions";
import { useCollectionAction } from "@/shared/hooks/useCollectionAction";
import { useSubCategoryAction } from "@/shared/hooks/useSubCategoryAction";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import { useProductAction } from "@/shared/hooks/useProductAction";
import ModalWindow from "@/shared/ui/Modal/Modal";
import styles from "./AdminFormProduct.module.css";

export const AdminFormProduct: React.FC = () => {
  const categories = useAppSelector((state) => state.adminCategory.categories);
  const collection = useAppSelector((state) => state.collection.collections);
  const subcategories = useAppSelector(
    (state) => state.subcategory.subcategories
  );
  const { allCategories } = useCategoryActions();
  const { getCollectionList } = useCollectionAction();
  const { getAllSubcategoryList } = useSubCategoryAction();
  const { handleCreateProduct } = useProductAction();
  const [title, setTitle] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [description, setDescription] = useState("");
  const [composition, setComposition] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [collectionId, setCollectionId] = useState<number | "">("");
  const [categoryId, setCategoryId] = useState<number | "">("");
  const [subcategoryId, setSubcategoryId] = useState<number | "">("");
  const [isModalActive, setIsModalActive] = useState(false);

  //!!! ДОСТАЮ КАТЕГОРИИ И КОЛЛЕКЦИИ
  useEffect(() => {
    allCategories();
    getCollectionList();
    getAllSubcategoryList();
  }, [allCategories, getCollectionList, getAllSubcategoryList]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (images.length > 0) {
      await handleCreateProduct({
        title,
        images,
        description,
        composition,
        price: Number(price),
        collectionId: Number(collectionId),
        categoryId: Number(categoryId),
        subcategoryId: Number(subcategoryId),
      });
      setTitle("");
      setDescription("");
      setComposition("");
      setPrice("");
      setCollectionId("");
      setCategoryId("");
      setSubcategoryId("");
      setImages([]);
      setIsModalActive(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setImages(Array.from(files));
    }
  };

  return (
    <div className={styles.container}>
      <Button theme={ThemeButton.LIGHT} onClick={() => setIsModalActive(true)}>
        Добавить продукт
      </Button>
      <ModalWindow active={isModalActive} setActive={setIsModalActive}>
        <form onSubmit={handleSubmit}>
          <label>
            Название:
            <input
              className={styles.input}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Фото:
            <input
              className={styles.input}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple
            />
          </label>
          <label>
            Описание:
            <textarea
              className={styles.input}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Состав:
            <input
              className={styles.input}
              type="text"
              value={composition}
              onChange={(e) => setComposition(e.target.value)}
            />
          </label>
          <label>
            Цена:
            <input
              className={styles.input}
              type="number"
              value={price}
              onChange={(e) => setPrice(+e.target.value)}
            />
          </label>
          <label>
            Коллекция:
            <select
              value={collectionId || ""}
              onChange={(e) => setCollectionId(+e.target.value)}
            >
              {collection &&
                collection.map((collection) => (
                  <option key={collection.id} value={collection.id}>
                    {collection.title}
                  </option>
                ))}
            </select>
          </label>
          <label>
            Категория:
            <select
              value={categoryId || ""}
              onChange={(e) => setCategoryId(+e.target.value)}
            >
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
            </select>
            <label>
              Подкатегория:
              <select
                value={subcategoryId || ""}
                onChange={(e) => setSubcategoryId(+e.target.value)}
              >
                {subcategories &&
                  subcategories.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.title}
                    </option>
                  ))}
              </select>
            </label>
          </label>
          <Button type="submit" theme={ThemeButton.LIGHT}>
            Добавить
          </Button>
        </form>
      </ModalWindow>
    </div>
  );
};

export default AdminFormProduct;
