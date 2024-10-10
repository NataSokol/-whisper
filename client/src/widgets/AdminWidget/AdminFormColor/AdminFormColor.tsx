import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addColorToProduct } from "@/entities/product/model/productSlice";
import { useColorAction } from "@/shared/hooks/useColorAction";
import { useProductAction } from "@/shared/hooks/useProductAction";
import { useAppDispatch } from "@/shared/hooks/useReduxHooks";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import ModalWindow from "@/shared/ui/Modal/Modal";
import styles from "./AdminFormColor.module.css";

export const AdminFormColor: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id: productId } = useParams<{ id: string }>();
  const { handleCreateColor } = useColorAction();
  const { getProduct } = useProductAction();
  const [title, setTitle] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);
//   const product = useAppSelector((state) => state.product.currProduct);
  //   const colors = useAppSelector((state) => state.product.currProduct?.Colors);
  //   console.log(colors);

  useEffect(() => {
    if (productId) {
      getProduct(Number(productId));
    }
  }, [getProduct, productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (productId) {
      const newProductId = Number(productId);
      const newColorResponse = await handleCreateColor({
        title,
        colorCode,
        productId: newProductId,
      });
      if (newColorResponse) {
        dispatch(addColorToProduct(newColorResponse.colors[0]));
      }
      await getProduct(Number(productId));
      setIsModalActive(false);
    } else {
      console.error("Failed to create color.");
    }
  };

  return (
    <div className={styles.container}>
      <Button theme={ThemeButton.LIGHT} onClick={() => setIsModalActive(true)}>
        Добавить цвета
      </Button>
      <ModalWindow active={isModalActive} setActive={setIsModalActive}>
        <form onSubmit={handleSubmit}>
          <label>
            Название:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Код цвета:
            <input
              type="text"
              value={colorCode}
              onChange={(e) => setColorCode(e.target.value)}
            />
          </label>
          <Button type="submit" theme={ThemeButton.LIGHT}>
            Добавить
          </Button>
          <Button
            type="button"
            onClick={() => setIsModalActive(false)}
            theme={ThemeButton.DARK}
          >
            Закрыть
          </Button>
        </form>
      </ModalWindow>
    </div>
  );
};

export default AdminFormColor;
