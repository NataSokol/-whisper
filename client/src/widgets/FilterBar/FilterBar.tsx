import React, { useEffect, useState } from "react";
import styles from "./FilterBar.module.css";
import { InlineDropdown } from "@/shared/ui/Dropdown";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "@/shared/hooks/useReduxHooks";
import { getAllProducts } from "@/entities/product";
import { setCategoryFilter } from "@/entities/product/model/productSlice";

export const FilterBar: React.FC = () => {
  const [size, setSize] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [material, setMaterial] = useState<string[]>([]);
  const [inStock, setInStock] = useState<boolean>(false);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const sizeOptions = [
    { value: "oneSize", label: "ONE SIZE" },
    { value: "xss", label: "XS-S" },
    { value: "ml", label: "M-L" },
  ];
  const colorOptions = [
    { value: "beige", label: "БЕЖЕВЫЙ" },
    { value: "white", label: "БЕЛЫЙ" },
    { value: "pink", label: "РОЗОВЫЙ" },
    { value: "gray", label: "СЕРЫЙ" },
  ];
  const materialOptions = [
    { value: "muslin", label: "МУСЛИН" },
    { value: "viscose", label: "ВИСКОЗА" },
  ];

  const handleReset = () => {
    setSize([]);
    setColor([]);
    setMaterial([]);
    setInStock(false);
    dispatch(setCategoryFilter(null));
  };

  const handleCategoryClick = (categoryId: number | null) => {
    dispatch(setCategoryFilter(categoryId));
  };

  useEffect(() => {
    setSize([]);
    setColor([]);
    setMaterial([]);
    setInStock(false);
    dispatch(setCategoryFilter(null));
  }, [location, dispatch]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={styles.filterContainer}>
      <ul className={styles.categoryList}>
        <li className={styles.categoryItem}>
          <button
            onClick={() => handleCategoryClick(null)}
            className={styles.categoryButton}
          >
            ВСЕ ТОВАРЫ
          </button>
        </li>
        <li className={styles.categoryItem}>
          <button
            onClick={() => handleCategoryClick(1)}
            className={styles.categoryButton}
          >
            КОСТЮМЫ
          </button>
        </li>
        <li className={styles.categoryItem}>
          <button
            onClick={() => handleCategoryClick(2)}
            className={styles.categoryButton}
          >
            ФУТБОЛКИ
          </button>
        </li>
        <li className={styles.categoryItem}>
          <button
            onClick={() => handleCategoryClick(4)}
            className={styles.categoryButton}
          >
            ПИЖАМЫ
          </button>
        </li>
        <li className={styles.categoryItem}>
          <button
            onClick={() => handleCategoryClick(3)}
            className={styles.categoryButton}
          >
            ДЛЯ СПОРТА
          </button>
        </li>
        <li className={`${styles.categoryItem} `}>
          <button
            onClick={() => handleCategoryClick(null)}
            className={`${styles.categoryButton} ${styles.saleButton}`}
          >
            SALE
          </button>
        </li>
      </ul>

      <div className={styles.filterSectionContainer}>
        <div className={styles.filterSection}>
          <InlineDropdown
            label="РАЗМЕР"
            values={size}
            onChange={setSize}
            options={sizeOptions}
          />
        </div>

        <div className={styles.filterSection}>
          <InlineDropdown
            label="ЦВЕТ"
            values={color}
            onChange={setColor}
            options={colorOptions}
          />
        </div>

        <div className={styles.filterSection}>
          <InlineDropdown
            label="МАТЕРИАЛ"
            values={material}
            onChange={setMaterial}
            options={materialOptions}
          />
        </div>

        <div className={styles.filterSection}>
          <span className={styles.switchLabel}>В НАЛИЧИИ</span>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={inStock}
              onChange={() => setInStock(!inStock)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>

      <button onClick={handleReset} className={styles.resetButton}>
        СБРОСИТЬ
      </button>
    </div>
  );
};

export default FilterBar;
