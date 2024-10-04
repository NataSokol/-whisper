import React, { useEffect } from "react";
import { CategoryItem } from "@/entities/category";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { getAllCategory } from "@/entities/category";

export const CategoryList: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.userCategory.categories);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <CategoryItem category={category} />
        </div>
      ))}
    </div>
  );
};
