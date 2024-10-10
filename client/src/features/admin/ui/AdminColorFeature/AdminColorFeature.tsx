import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductAction } from "@/shared/hooks/useProductAction";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import { AdminColorList } from '@/widgets/AdminWidget/AdminColorList';

export const AdminColorFeature: React.FC = () => {
  const { id: productId } = useParams<{ id: string }>();
  const { getProduct, getProductList } = useProductAction();
  const colors = useAppSelector((state) => state.product.currProduct?.Colors);
  // const { handleUpdateColor } = useColorAction();
  // const [title, setTitle] = useState("");
  // const [code, setCode] = useState("");
  // const [isModalActive, setIsModalActive] = useState(false);

  // const [selectedColorId, setSelectedColorId] = useState<number | null>(null);

  useEffect(() => {
    if (productId) {
      getProduct(Number(productId));
      getProductList();
    }
  }, [getProduct, productId, getProductList]);

  // const handleUpdate = async () => {
  //   if (setSelectedColorId !== null) {
  //     const updateColor = {
  //       id: selectedColorId,
  //       title,
  //       code,
  //     };
  //     await handleUpdateColor(
  //       updateColor.id ?? 0,
  //       updateColor.title,
  //       updateColor.code
  //     );
  //     getProduct(Number(productId));
  //     setIsModalActive(false);
  //   }
  // };

  // const openModal = (color: Color) => {
  //   setSelectedColorId(color.id);
  //   setTitle(color.title);
  //   setCode(color.colorCode);
  //   setIsModalActive(true);
  // };

  // const handleCloseModal = () => {
  //   setSelectedColorId(null);
  //   setIsModalActive(false);
  // };

  return (
    <div>
      {colors && <AdminColorList colors={colors} />}
      {/* <ModalWindow active={isModalActive} setActive={handleCloseModal}>
        <div>
          <>
            <h2>Редактировать цвета</h2>
            <label>
              Название:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </label>
            <Button type='submit' theme={ThemeButton.LIGHT} onClick={handleUpdate}>
              Обновить
            </Button>
          </>
        </div>
      </ModalWindow>
    */}
    </div>
  );
};

export default AdminColorFeature;
