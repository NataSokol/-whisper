import React from "react";
import { Category } from "@/entities/category";

type Props = {
  category: Category;
};

export const CategoryItem: React.FC<Props> = ({ category }) => {
  return (
    <div>
      <p>{category.title}</p>
    </div>
  );
};
