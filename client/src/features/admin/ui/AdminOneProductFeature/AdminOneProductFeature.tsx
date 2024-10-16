import React, { useEffect, useState } from "react";
import { useProductAction } from "@/shared/hooks/useProductAction";
import { useCategoryActions } from "@/shared/hooks/useCategoryActions";
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import { useCollectionAction } from "@/shared/hooks/useCollectionAction";
import { useSubCategoryAction } from "@/shared/hooks/useSubCategoryAction";
import { Product } from "@/entities/product";
import {
  AdminOneProductImageList,
  AdminOneProductList,
} from "@/widgets/AdminWidget";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import ModalWindow from "@/shared/ui/Modal/Modal";
import styles from "./AdminOneProductFeature.module.css";

export const AdminOneProductFeature: React.FC = () => {
  const categories = useAppSelector((state) => state.adminCategory.categories);
  const collection = useAppSelector((state) => state.collection.collections);
  const subcategories = useAppSelector(
    (state) => state.subcategory.subcategories
  );
  const { handleUpdateProduct, getProduct } = useProductAction();
  const { allCategories } = useCategoryActions();
  const { getCollectionList } = useCollectionAction();
  const { getAllSubcategoryList } = useSubCategoryAction();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [composition, setComposition] = useState("");
  const [price, setPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    number | undefined
  >();
  const [selectedCollectionId, setSelectedCollectionId] = useState<
    number | undefined
  >();
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<
    number | undefined
  >();

  useEffect(() => {
    allCategories();
    getCollectionList();
    getAllSubcategoryList();
  }, [allCategories, getCollectionList, getAllSubcategoryList]);

  const handleUpdate = async () => {
    if (selectedProduct) {
      const productData = {
        title,
        description,
        composition,
        price,
        salePrice,
        categoryId: selectedCategoryId,
        collectionId: selectedCollectionId,
        subcategoryId: selectedSubcategoryId,
      };
      await handleUpdateProduct(selectedProduct.id, productData);
      setModalActive(false);
      getProduct(Number(selectedProduct.id));
    }
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setTitle(product.title);
    setDescription(product.description);
    setComposition(product.composition);
    setPrice(product.price);
    setSalePrice(product.salePrice | 0);
    setSelectedCategoryId(product.Category?.id);
    setSelectedCollectionId(product.Collection?.id);
    setSelectedSubcategoryId(product.Subcategory?.id);
    setModalActive(true);
  };

  return (
    <div>
      <AdminOneProductList
        openModal={openModal}
        onUpdateProduct={handleUpdateProduct}
      />
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div className={styles.modal}>
          {selectedProduct && (
            <>
              <h2 className={styles.title}>Редактировать продукт</h2>
              <div className={styles.formGroup}>
                <label>Название:</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Описание:</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Состав:</label>
                <input
                  type="text"
                  value={composition}
                  onChange={(e) => setComposition(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Цена:</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(+e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Скидка:</label>
                <input
                  type="number"
                  value={salePrice}
                  onChange={(e) => setSalePrice(+e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Категория:</label>
                <select
                  value={selectedCategoryId || ""}
                  onChange={(e) => setSelectedCategoryId(+e.target.value)}
                >
                  {categories &&
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Коллекция:</label>
                <select
                  value={selectedCollectionId || ""}
                  onChange={(e) => setSelectedCollectionId(+e.target.value)}
                >
                  {collection &&
                    collection.map((collection) => (
                      <option key={collection.id} value={collection.id}>
                        {collection.title}
                      </option>
                    ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Подкатегория:</label>
                <select
                  value={selectedSubcategoryId || ""}
                  onChange={(e) => setSelectedSubcategoryId(+e.target.value)}
                >
                  {subcategories &&
                    subcategories.map((subcategory) => (
                      <option key={subcategory.id} value={subcategory.id}>
                        {subcategory.title}
                      </option>
                    ))}
                </select>
              </div>
            </>
          )}
          <div className={styles.buttons}>
            <Button theme={ThemeButton.LIGHT} onClick={handleUpdate}>
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
      <AdminOneProductImageList />
    </div>
  );
};

export default AdminOneProductFeature;
