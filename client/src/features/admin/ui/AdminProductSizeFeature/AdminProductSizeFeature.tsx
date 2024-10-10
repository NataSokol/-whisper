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
  const [length, setLength] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [chestGirth, setChestGirth] = useState<number | "">("");
  const [chestUnderGirth, setChestUnderGirth] = useState<number | "">("");
  const [externalSeamLength, setExternalSeamLength] = useState<number | "">("");
  const [frontLength, setFrontLength] = useState<number | "">("");
  const [hipGirth, setHipGirth] = useState<number | "">("");
  const [innerSeamLength, setInnerSeamLength] = useState<number | "">("");
  const [waistGirth, setWaistGirth] = useState<number | "">("");
  const [sleeveLength, setSleeveLength] = useState<number | "">("");
  const [quantity, setQuantity] = useState<number | "">("");

  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
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
      await handleUpdateProductSize(
        selectedSize.id,
        newSize as Partial<ProductSize>
      );
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
              <h2 className={styles.modalTitle}>Редактировать размеры</h2>
              <form className={styles.form} onSubmit={handleUpdate}>
                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>
                    Доступные размеры:
                  </label>
                  <input
                    type="text"
                    className={styles.modalInput}
                    value={sizeTitle}
                    onChange={(e) => setSizeTitle(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>Длина:</label>
                  <input
                    type="number"
                    className={styles.modalInput}
                    value={length}
                    onChange={(e) => setLength(+e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>Ширина:</label>
                  <input
                    type="number"
                    className={styles.modalInput}
                    value={width}
                    onChange={(e) => setWidth(+e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>Грудная обхват:</label>
                  <input
                    type="number"
                    className={styles.modalInput}
                    value={chestGirth}
                    onChange={(e) => setChestGirth(+e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>
                    Обхват под грудью:
                  </label>
                  <input
                    type="number"
                    className={styles.modalInput}
                    value={chestUnderGirth}
                    onChange={(e) => setChestUnderGirth(+e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>
                    Длина внешнего шва:
                  </label>
                  <input
                    type="number"
                    className={styles.modalInput}
                    value={externalSeamLength}
                    onChange={(e) => setExternalSeamLength(+e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>Передняя длина:</label>
                  <input
                    type="number"
                    className={styles.modalInput}
                    value={frontLength}
                    onChange={(e) => setFrontLength(+e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>Обхват бедер:</label>
                  <input
                    type="number"
                    className={styles.modalInput}
                    value={hipGirth}
                    onChange={(e) => setHipGirth(+e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>
                    Длина внутреннего шва:
                  </label>
                  <input
                    type="number"
                    className={styles.modalInput}
                    value={innerSeamLength}
                    onChange={(e) => setInnerSeamLength(+e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>Обхват талии:</label>
                  <input
                    type="number"
                    className={styles.modalInput}
                    value={waistGirth}
                    onChange={(e) => setWaistGirth(+e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>Длина рукава:</label>
                  <input
                    type="number"
                    className={styles.modalInput}
                    value={sleeveLength}
                    onChange={(e) => setSleeveLength(+e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.modalLabel}>Количество:</label>
                  <input
                    type="number"
                    className={styles.modalInput}
                    value={quantity}
                    onChange={(e) => setQuantity(+e.target.value)}
                    required
                  />
                </div>

                <div className={styles.buttonContainer}>
                  <Button theme={ThemeButton.LIGHT} onClick={handleUpdate}>
                    Сохранить
                  </Button>
                  <Button theme={ThemeButton.LIGHT} onClick={handleCloseModal}>
                    Закрыть
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </ModalWindow>
    </div>
  );
};

export default AdminProductSizeFeature;
