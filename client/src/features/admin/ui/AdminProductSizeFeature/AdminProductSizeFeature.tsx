import React, { useState } from "react";
import { AdminProductSizeList } from "@/widgets/AdminWidget";
import { ProductSize } from "@/entities/productsize";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import { useProductSizeActions } from "@/shared/hooks/useProductSizeActions";
import { useProductAction } from "@/shared/hooks/useProductAction";
import { useParams } from "react-router-dom";
import ModalWindow from "@/shared/ui/Modal/Modal";
import styles from "./AdminProductSizeFeature.module.css";

export const AdminProductSizeFeature: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProduct } = useProductAction();
  const { handleUpdateProductSize } = useProductSizeActions();
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
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);

  const handleUpdate = async () => {
    if (selectedSize) {
      const newSize = {
        productId: selectedSize.productId,
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
      };
      await handleUpdateProductSize(selectedSize.id, newSize);
      getProduct(Number(id));
      setIsModalActive(false);
    }
  };

  const handleOpenModal = (size: ProductSize) => {
    setSelectedSize(size);
    setSizeTitle(size.sizeTitle);
    setLength(size.length);
    setWidth(size.width);
    setChestGirth(size.chestGirth);
    setChestUnderGirth(size.chestUnderGirth);
    setExternalSeamLength(size.externalSeamLength);
    setFrontLength(size.frontLength);
    setHipGirth(size.hipGirth);
    setInnerSeamLength(size.innerSeamLength);
    setWaistGirth(size.waistGirth);
    setSleeveLength(size.sleeveLength);
    setQuantity(size.quantity);
    setIsModalActive(true);
  };

  const handleCloseModal = () => {
    setSelectedSize(null);
    setIsModalActive(false);
  };

  return (
    <div className={styles.container}>
      <AdminProductSizeList onEditSize={handleOpenModal} />
      <ModalWindow active={isModalActive} setActive={handleCloseModal}>
        <div className={styles.modal}>
          {selectedSize && (
            <>
              <h2>Редактировать размеры</h2>
              <label>
                Доступные размеры:
                <input
                  type="text"
                  value={sizeTitle}
                  onChange={(e) => setSizeTitle(e.target.value)}
                />
              </label>
              <label>
                Длина:
                <input
                  type="text"
                  value={length}
                  onChange={(e) => setLength(+e.target.value)}
                />
              </label>
              <label>
                Ширина:
                <input
                  type="text"
                  value={width}
                  onChange={(e) => setWidth(+e.target.value)}
                />
              </label>
              <label>
                Грудная обхват:
                <input
                  type="number"
                  value={chestGirth}
                  onChange={(e) => setChestGirth(+e.target.value)}
                />
              </label>
              <label>
                Обхват под грудью:
                <input
                  type="number"
                  value={chestUnderGirth}
                  onChange={(e) => setChestUnderGirth(+e.target.value)}
                />
              </label>
              <label>
                Длина внешнего шва:
                <input
                  type="number"
                  value={externalSeamLength}
                  onChange={(e) => setExternalSeamLength(+e.target.value)}
                />
              </label>
              <label>
                Передняя длина:
                <input
                  type="number"
                  value={frontLength}
                  onChange={(e) => setFrontLength(+e.target.value)}
                />
              </label>
              <label>
                Обхват бедер:
                <input
                  type="number"
                  value={hipGirth}
                  onChange={(e) => setHipGirth(+e.target.value)}
                />
              </label>
              <label>
                Длина внутреннего шва:
                <input
                  type="number"
                  value={innerSeamLength}
                  onChange={(e) => setInnerSeamLength(+e.target.value)}
                />
              </label>
              <label>
                Обхват талии:
                <input
                  type="number"
                  value={waistGirth}
                  onChange={(e) => setWaistGirth(+e.target.value)}
                />
              </label>
              <label>
                Длина рукава:
                <input
                  type="number"
                  value={sleeveLength}
                  onChange={(e) => setSleeveLength(+e.target.value)}
                />
              </label>
              <label>
                Количество:
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(+e.target.value)}
                />
              </label>
              <Button theme={ThemeButton.LIGHT} onClick={handleUpdate}>
                Сохранить
              </Button>
              <Button theme={ThemeButton.LIGHT} onClick={handleCloseModal}>
                Закрыть
              </Button>
            </>
          )}
        </div>
      </ModalWindow>
    </div>
  );
};

export default AdminProductSizeFeature;
