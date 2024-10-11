import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useCategoryActions } from "@/shared/hooks/useCategoryActions";
import { useCollectionAction } from "@/shared/hooks/useCollectionAction";
import { useSubCategoryAction } from "@/shared/hooks/useSubCategoryAction";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import { useProductAction } from "@/shared/hooks/useProductAction";
import { message } from "antd";
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
  const [collectionId, setCollectionId] = useState<number | "">(1);
  const [categoryId, setCategoryId] = useState<number | "">(1);
  const [subcategoryId, setSubcategoryId] = useState<number | "">(1);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    allCategories();
    getCollectionList();
    getAllSubcategoryList();
  }, [allCategories, getCollectionList, getAllSubcategoryList]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      title === "" ||
      description === "" ||
      composition === "" ||
      price === "" ||
      collectionId === "" ||
      categoryId === "" ||
      subcategoryId === ""
    ) {
      message.error("Заполните все поля");
    }

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
      console.log(collectionId, categoryId, subcategoryId);

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
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles["form-row"]}>
            <label className={styles.label}>Название:</label>
            <input
              className={styles.input}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={styles["form-row"]}>
            <label className={styles.label}>Фото:</label>
            <input
              className={styles.input}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple
            />
          </div>

          <div className={styles["form-row"]}>
            <label className={styles.label}>Описание:</label>
            <textarea
              className={styles.textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className={styles["form-row"]}>
            <label className={styles.label}>Состав:</label>
            <input
              className={styles.input}
              type="text"
              value={composition}
              onChange={(e) => setComposition(e.target.value)}
            />
          </div>

          <div className={styles["form-row"]}>
            <label className={styles.label}>Цена:</label>
            <input
              className={styles.input}
              type="number"
              value={price}
              onChange={(e) => setPrice(+e.target.value)}
            />
          </div>

          <div className={styles["form-row"]}>
            <label className={styles.label}>Коллекция:</label>
            <select
              className={styles.select}
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
          </div>

          <div className={styles["form-row"]}>
            <label className={styles.label}>Категория:</label>
            <select
              className={styles.select}
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
          </div>

          <div className={styles["form-row"]}>
            <label className={styles.label}>Подкатегория:</label>
            <select
              className={styles.select}
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
          </div>
          <div className={styles["button-container"]}>
            <Button theme={ThemeButton.LIGHT} type="submit">
              Добавить
            </Button>
          </div>
        </form>
      </ModalWindow>
    </div>
  );
};

export default AdminFormProduct;
