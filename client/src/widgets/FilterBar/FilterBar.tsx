import React, { useState } from "react";
import styles from "./FilterBar.module.css";
import { InlineDropdown } from "@/shared/ui/Dropdown";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";

export const FilterBar: React.FC = () => {
  const [size, setSize] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [material, setMaterial] = useState<string[]>([]);
  const [inStock, setInStock] = useState<boolean>(false);

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
  };

  return (
    <div className={styles.filterContainer}>
      <ul className={styles.categoryList}>
        <li className={styles.categoryItem}>
          <Link to={ROUTES.CATALOG}>ВСЕ ТОВАРЫ</Link>
        </li>
        <li className={styles.categoryItem}>
          <Link to={ROUTES.CATALOG}>КОСТЮМЫ</Link>
        </li>
        <li className={styles.categoryItem}>
          <Link to={ROUTES.CATALOG}>ФУТБОЛКИ</Link>
        </li>
        <li className={styles.categoryItem}>
          <Link to={ROUTES.CATALOG}>ПИЖАМЫ</Link>
        </li>
        <li className={styles.categoryItem}>
          <Link to={ROUTES.CATALOG}>ДЛЯ СПОРТА</Link>
        </li>
        <li className={`${styles.categoryItem} `}>
          <Link to={ROUTES.CATALOG} className={styles.sale}>
            SALE
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
