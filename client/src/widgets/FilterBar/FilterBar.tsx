import React, { useEffect, useState } from "react";
import styles from "./FilterBar.module.css";
import { InlineDropdown } from "@/shared/ui/Dropdown";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { getAllProducts } from "@/entities/product";
import { setSubcategoryFilter } from "@/entities/product/model/productSlice";
import { ROUTES } from "@/app/router/routes";
import { Subcategory } from "@/entities/subcategory";

export const FilterBar: React.FC = () => {
  const [size, setSize] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [material, setMaterial] = useState<string[]>([]);
  const [inStock, setInStock] = useState<boolean>(false);
  const { products } = useAppSelector((state) => state.product);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const uniqueSubcategories: Subcategory[] = Array.from(
    new Map(
      products.map((product) => [product.Subcategory.id, product.Subcategory])
    ).values()
  );

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
    dispatch(setSubcategoryFilter(null));
  };

  const handleSubCategoryClick = (subcategoryId: number | null) => {
    dispatch(setSubcategoryFilter(subcategoryId));
  };

  useEffect(() => {
    setSize([]);
    setColor([]);
    setMaterial([]);
    setInStock(false);
    dispatch(setSubcategoryFilter(null));
  }, [location, dispatch]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={styles.filterContainer}>
      <ul className={styles.categoryList}>
        <li className={styles.categoryItem}>
          <button
            onClick={() => handleSubCategoryClick(null)}
            className={styles.categoryButton}
          >
            ВСЕ ТОВАРЫ
          </button>
        </li>
        {uniqueSubcategories.map((subcategory) => (
          <li key={subcategory.id} className={styles.categoryItem}>
            <button
              onClick={() => handleSubCategoryClick(subcategory.id)}
              className={styles.categoryButton}
            >
              {subcategory.title.toUpperCase()}
            </button>
          </li>
        ))}
        <li className={`${styles.categoryItem} `}>
          <Link to={ROUTES.SALES}>
            <button
              onClick={() => handleSubCategoryClick(null)}
              className={`${styles.categoryButton} ${styles.saleButton}`}
            >
              SALE
            </button>
          </Link>
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
