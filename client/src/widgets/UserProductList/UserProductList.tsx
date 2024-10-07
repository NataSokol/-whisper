import React, { useEffect, useState } from "react";
import styles from "./UserProductList.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { getAllProducts } from "@/entities/product";
import { UserProductItem } from "@/entities/product/ui";
import { CustomSelect } from "@/shared/ui/Select";

export const UserProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);
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

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const sortOptions = [
    { value: "", label: "ПО УМОЛЧАНИЮ" },
    { value: "cheapFirst", label: "СНАЧАЛА ДЕШЕВЛЕ" },
    { value: "expensiveFirst", label: "СНАЧАЛА ДОРОЖЕ" },
  ];

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
        {sortedProducts.map((product) => (
          <UserProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
