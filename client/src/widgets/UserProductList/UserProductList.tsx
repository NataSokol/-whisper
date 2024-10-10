import React, { useEffect, useState } from "react";
import styles from "./UserProductList.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { getAllProducts } from "@/entities/product";
import { UserProductItem } from "@/entities/product/ui";
import { CustomSelect } from "@/shared/ui/Select";

export const UserProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, filter } = useAppSelector((state) => state.product);
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "cheapFirst") {
      return a.price - b.price;
    } else if (sortOption === "expensiveFirst") {
      return b.price - a.price;
    }
    return 0;
  });

  const sortOptions = [
    { value: "", label: "ПО УМОЛЧАНИЮ" },
    { value: "cheapFirst", label: "СНАЧАЛА ДЕШЕВЛЕ" },
    { value: "expensiveFirst", label: "СНАЧАЛА ДОРОЖЕ" },
  ];

  const filteredProducts = filter.categoryId
    ? sortedProducts.filter(
        (product) => product.categoryId === filter.categoryId
      )
    : sortedProducts;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>ВСЕ ТОВАРЫ</span>
        <CustomSelect
          options={sortOptions}
          onChange={handleSortChange}
          value={sortOption}
          placeholder="СОРТИРОВКА"
        />
      </div>
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <UserProductItem key={product.id} product={product}  />
        ))}
      </div>
    </div>
  );
};
