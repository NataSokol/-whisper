import React, { useState, useRef, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { getAllCategory } from "@/entities/category";
import { getAllCollections } from "@/entities/collection";

export const Sidebar: React.FC = () => {
  const { categories } = useAppSelector((state) => state.userCategory);
  const { collections } = useAppSelector((state) => state.collection);
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
            <li className={styles.sidebarItem}>ПИЖАМЫ</li>
            <li className={styles.sidebarItem}>ХАЛАТЫ</li>
            <li className={styles.sidebarItem}>ТАПОЧКИ</li>
          </ul>
        )}
        {activeSubMenu === "sportsWear" && (
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarItem}>ЛЕГГИНСЫ</li>
            <li className={styles.sidebarItem}>ФУТБОЛКИ</li>
            <li className={styles.sidebarItem}>КРОССОВКИ</li>
          </ul>
        )}
        {activeSubMenu === "collections" && (
          <ul className={styles.sidebarList}>
            {collections.map((collection) => (
              <li className={styles.sidebarItem} key={collection.id}>
                {collection.title.toUpperCase()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
