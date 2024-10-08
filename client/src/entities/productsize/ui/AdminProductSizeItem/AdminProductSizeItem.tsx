import React from "react";
import { ProductSize } from "../../model";
// import styles from "./AdminProductSizeItem.module.css";

type Props = {
  productSize: ProductSize;
};

export const AdminProductSizeItem: React.FC<Props> = ({ productSize }) => {
  return (
    <div>
      <h4>{productSize.sizeTitle}</h4>
      <p>Грудная обхват: {productSize.chestGirth} см</p>
      <p>Обхват под грудью: {productSize.chestUnderGirth ?? "Нет данных"} см</p>
      <p>Длина внешнего шва: {productSize.externalSeamLength} см</p>
      <p>Передняя длина: {productSize.frontLength} см</p>
      <p>Обхват бедер: {productSize.hipGirth} см</p>
      <p>
        Длина внутреннего шва: {productSize.innerSeamLength ?? "Нет данных"} см
      </p>
      <p>Обхват талии: {productSize.waistGirth} см</p>
      <p>Длина рукава: {productSize.sleeveLength} см</p>
      <p>Количество: {productSize.quantity}</p>
    </div>
  );
};

export default AdminProductSizeItem;
