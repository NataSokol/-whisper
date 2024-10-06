import React, { useState, useRef, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { getAllCategory } from "@/entities/category";
import { getAllCollections } from "@/entities/collection";
import { getAllSubcategories } from "@/entities/subcategory";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const { categories } = useAppSelector((state) => state.userCategory);
  const { collections } = useAppSelector((state) => state.collection);
  const { subcategories } = useAppSelector((state) => state.subcategory);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const subSidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveSubMenu(null);
    }
  };

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllCollections());
    dispatch(getAllSubcategories());
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        subSidebarRef.current &&
        !subSidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveSubMenu(null);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, dispatch]);

  return (
    <div className={styles.container}>
      <button
        onClick={toggleSidebar}
        className={`${styles.sidebarButton} ${isOpen ? styles.opened : ""}`}
        ref={buttonRef}
      >
        <span className={styles.barTop}></span>
        <span className={styles.barMid}></span>
        <span className={styles.barBot}></span>
      </button>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
      )}
      {/* Основной сайдбар */}
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
        ref={sidebarRef}
      >
        <ul className={styles.sidebarList}>
          <li
            className={styles.sidebarItem}
            onMouseEnter={() => setActiveSubMenu(null)}
          >
            {categories[0]?.title.toUpperCase()}
          </li>
          <li
            className={`${styles.sidebarItem} ${
              activeSubMenu === "homeWear" ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveSubMenu("homeWear")}
          >
            {categories[1]?.title.toUpperCase()}{" "}
            <span className={styles.arrow}>&gt;</span>
          </li>
          <li
            className={`${styles.sidebarItem} ${
              activeSubMenu === "sportsWear" ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveSubMenu("sportsWear")}
          >
            {categories[2]?.title.toUpperCase()}{" "}
            <span className={styles.arrow}>&gt;</span>
          </li>
          <li
            className={`${styles.sidebarItem} ${
              activeSubMenu === "collections" ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveSubMenu("collections")}
          >
            КОЛЛЕКЦИИ <span className={styles.arrow}>&gt;</span>
          </li>
          <li
            className={`${styles.sidebarItem} ${styles.sidebarItemSale}`}
            onMouseEnter={() => setActiveSubMenu(null)}
          >
            <Link to={ROUTES.CATALOG} className={styles.sidebarItemSale}>
              SALE
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`${styles.subSidebar} ${
          isOpen && activeSubMenu ? styles.subSidebarVisible : ""
        }`}
        onMouseEnter={() => {}}
        onMouseLeave={() => setActiveSubMenu(null)}
      >
        {activeSubMenu === "homeWear" && (
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarItem}>
              <Link to={ROUTES.CATALOG}>СМОТРЕТЬ ВСЁ</Link>
            </li>
            {subcategories.map((subcategory) => (
              <li className={styles.sidebarItem} key={subcategory.id}>
                <Link to={ROUTES.CATALOG}>
                  {subcategory.title.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {activeSubMenu === "sportsWear" && (
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarItem}>
              <Link to={ROUTES.CATALOG}>СМОТРЕТЬ ВСЁ</Link>
            </li>
            <li className={styles.sidebarItem}>ЛЕГГИНСЫ</li>
            <li className={styles.sidebarItem}>ФУТБОЛКИ</li>
            <li className={styles.sidebarItem}>КРОССОВКИ</li>
          </ul>
        )}
        {activeSubMenu === "collections" && (
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarItem}>
              <Link to={ROUTES.CATALOG}>СМОТРЕТЬ ВСЁ</Link>
            </li>
            {collections.map((collection) => (
              <li className={styles.sidebarItem} key={collection.id}>
                <Link to={ROUTES.CATALOG}>
                  {collection.title.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
