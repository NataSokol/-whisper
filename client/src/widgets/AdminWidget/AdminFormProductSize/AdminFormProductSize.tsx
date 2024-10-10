import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductSizeActions } from "@/shared/hooks/useProductSizeActions";
import { useProductAction } from "@/shared/hooks/useProductAction";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import ModalWindow from "@/shared/ui/Modal/Modal";
import styles from "./AdminFormProductSize.module.css";

export const AdminFormProductSize: React.FC = () => {
  const { id: productId } = useParams<{ id: string }>();
  const { getProduct } = useProductAction();
  const { handleCreateProductSize } = useProductSizeActions();
  const [sizeTitle, setSizeTitle] = useState("");
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [chestGirth, setChestGirth] = useState(0);
  const [chestUnderGirth, setChestUnderGirth] = useState(0);
  const [externalSeamLength, setExternalSeamLength] = useState(0);
  const [frontLength, setFrontLength] = useState(0);
  const [hipGirth, setHipGirth] = useState(0);
  const [innerSeamLength, setInnerSeamLength] = useState(0);
  const [waistGirth, setWaistGirth] = useState(0);
  const [sleeveLength, setSleeveLength] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    if (productId) {
      getProduct(Number(productId));
    }
  }, [getProduct, productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleCreateProductSize({
      productId: Number(productId),
      sizeTitle,
      length,
      width,
      chestGirth,
      chestUnderGirth,
      externalSeamLength,
      frontLength,
      hipGirth,
      innerSeamLength,
      waistGirth,
      sleeveLength,
      quantity,
    });
    getProduct(Number(productId));
    setIsModalActive(false);
  };

  return (
    <div className={styles.adminFormContainer}>
      {
        <Button
          theme={ThemeButton.LIGHT}
          onClick={() => setIsModalActive(true)}
        >
          Добавить размеры
        </Button>
      }
      <ModalWindow active={isModalActive} setActive={setIsModalActive}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>Доступные размеры:</label>
            <input
              className={styles.adminFormInput}
              type="text"
              value={sizeTitle}
              onChange={(e) => setSizeTitle(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>Длина:</label>
            <input
              className={styles.adminFormInput}
              type="number"
              value={length}
              onChange={(e) => setLength(+e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>Ширина:</label>
            <input
              className={styles.adminFormInput}
              type="number"
              value={width}
              onChange={(e) => setWidth(+e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>Грудная обхват:</label>
            <input
              className={styles.adminFormInput}
              type="number"
              value={chestGirth}
              onChange={(e) => setChestGirth(+e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>Обхват под грудью:</label>
            <input
              className={styles.adminFormInput}
              type="number"
              value={chestUnderGirth}
              onChange={(e) => setChestUnderGirth(+e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>Длина внешнего шва:</label>
            <input
              className={styles.adminFormInput}
              type="number"
              value={externalSeamLength}
              onChange={(e) => setExternalSeamLength(+e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>Передняя длина:</label>
            <input
              className={styles.adminFormInput}
              type="number"
              value={frontLength}
              onChange={(e) => setFrontLength(+e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>Обхват бедер:</label>
            <input
              className={styles.adminFormInput}
              type="number"
              value={hipGirth}
              onChange={(e) => setHipGirth(+e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>
              Длина внутреннего шва:
            </label>
            <input
              className={styles.adminFormInput}
              type="number"
              value={innerSeamLength}
              onChange={(e) => setInnerSeamLength(+e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>Обхват талии:</label>
            <input
              className={styles.adminFormInput}
              type="number"
              value={waistGirth}
              onChange={(e) => setWaistGirth(+e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>Длина рукава:</label>
            <input
              className={styles.adminFormInput}
              type="number"
              value={sleeveLength}
              onChange={(e) => setSleeveLength(+e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.adminFormLabel}>Количество:</label>
            <input
              className={styles.adminFormInput}
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            />
          </div>
          <div className={styles.modelButton}>
            <Button theme={ThemeButton.LIGHT} type="submit">
              Создать
            </Button>
          </div>
        </form>
      </ModalWindow>
    </div>
  );
};
