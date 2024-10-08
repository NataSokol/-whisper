import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductSizeActions } from "@/shared/hooks/useProductSizeActions";
import { useProductAction } from "@/shared/hooks/useProductAction";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
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

  //!!! ПОПРОБОВАТЬ ПО ДРУГОМУ
  const productSizes =
    useAppSelector((state) => state.product.currProduct?.ProductSizes) || [];

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
    <div className={styles.container}>
      {productSizes.length === 0 && (
        <Button
          theme={ThemeButton.LIGHT}
          onClick={() => setIsModalActive(true)}
        >
          Добавить размеры
        </Button>
      )}
      <ModalWindow active={isModalActive} setActive={setIsModalActive}>
        <form onSubmit={handleSubmit}>
          <label>
            Доступные размеры:
            <input
              className={styles.input}
              type="text"
              value={sizeTitle}
              onChange={(e) => setSizeTitle(e.target.value)}
            />
          </label>
          <label>
            Длина:
            <input
              className={styles.input}
              type="number"
              value={length}
              onChange={(e) => setLength(+e.target.value)}
            />
          </label>
          <label>
            Ширина:
            <input
              className={styles.input}
              type="number"
              value={width}
              onChange={(e) => setWidth(+e.target.value)}
            />
          </label>
          <label>
            Грудная обхват:
            <input
              className={styles.input}
              type="number"
              value={chestGirth}
              onChange={(e) => setChestGirth(+e.target.value)}
            />
          </label>
          <label>
            Обхват под грудью:
            <input
              className={styles.input}
              type="number"
              value={chestUnderGirth}
              onChange={(e) => setChestUnderGirth(+e.target.value)}
            />
          </label>
          <label>
            Длина внешнего шва:
            <input
              className={styles.input}
              type="number"
              value={externalSeamLength}
              onChange={(e) => setExternalSeamLength(+e.target.value)}
            />
          </label>
          <label>
            Передняя длина:
            <input
              className={styles.input}
              type="number"
              value={frontLength}
              onChange={(e) => setFrontLength(+e.target.value)}
            />
          </label>
          <label>
            Обхват бедер:
            <input
              className={styles.input}
              type="number"
              value={hipGirth}
              onChange={(e) => setHipGirth(+e.target.value)}
            />
          </label>
          <label>
            Длина внутреннего шва:
            <input
              className={styles.input}
              type="number"
              value={innerSeamLength}
              onChange={(e) => setInnerSeamLength(+e.target.value)}
            />
          </label>
          <label>
            Обхват талии:
            <input
              className={styles.input}
              type="number"
              value={waistGirth}
              onChange={(e) => setWaistGirth(+e.target.value)}
            />
          </label>
          <label>
            Длина рукава:
            <input
              className={styles.input}
              type="number"
              value={sleeveLength}
              onChange={(e) => setSleeveLength(+e.target.value)}
            />
          </label>
          <label>
            Количество:
            <input
              className={styles.input}
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            />
          </label>
          <Button type="submit" theme={ThemeButton.LIGHT}>
            Добавить
          </Button>
          <Button
            type="button"
            theme={ThemeButton.DARK}
            onClick={() => setIsModalActive(false)}
          >
            Закрыть
          </Button>
        </form>
      </ModalWindow>
    </div>
  );
};

export default AdminFormProductSize;
