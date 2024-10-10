import React from "react";
import { ColorItem, ColorList } from "@/entities/color";
import { AdminFormColor } from "../AdminFormColor";
// import styles from "./AdminColorList.module.css";

type Props = {
  colors: ColorList;
};

export const AdminColorList: React.FC<Props> = ({ colors }) => {
  return (
    <div>
      <h2>Доступные цвета:</h2>
      {colors.map((color) => (
        <div key={color.id}>
          <ColorItem color={color} />
        </div>
      ))}
      <AdminFormColor />
      {/* <Button theme={ThemeButton.LIGHT} onClick={() => onEditSize(colors[0])}>
        Изменить цвет
      </Button> */}
    </div>
  );
};

export default AdminColorList;
