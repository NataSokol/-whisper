import React, { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { Sidebar } from "../Sidebar";

export const Navbar: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleSearchClick = () => {
    setIsSearchActive(true);
    setTimeout(() => {
      const input = searchContainerRef.current?.querySelector("input");
      input?.focus();
    }, 0);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleSearchInputBlur = () => {
    setIsInputFocused(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsInputFocused(false);
        setSearchValue("");
        setTimeout(() => {
          setIsSearchActive(false);
        }, 300);
      }
    };

    if (isSearchActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchActive]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Добавляем обработчик события scroll
    window.addEventListener("scroll", handleScroll);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      <Sidebar />
      <div className={styles.navbarLogo}>
        <img src="../../public/img/logo.svg" alt="" />
      </div>
      <div
        className={`${styles.navbarLinks} ${
          isSearchActive ? styles.hideButtons : ""
        }`}
      >
        <div
          className={`${styles.searchContainer} ${
            isSearchActive ? styles.active : ""
          } ${isInputFocused ? styles.focused : ""}`}
          ref={searchContainerRef}
        >
          <div className={styles.searchContent}>
            <img
              src="../../public/img/search.svg"
              alt=""
              className={styles.searchIcon}
              onClick={handleSearchClick}
            />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Что вы хотите найти?"
              value={searchValue}
              onChange={handleSearchInputChange}
              onFocus={handleSearchInputFocus}
              onBlur={handleSearchInputBlur}
              maxLength={30}
            />
          </div>
        </div>
        {!isSearchActive && (
          <>
            <button className={styles.button}>
              <Link to={ROUTES.FAVORITES}>
                <img src="../../public/img/favorites.svg" alt="" />
              </Link>
            </button>
            <button className={styles.button}>
              <Link to={ROUTES.PROFILE}>
                <img src="../../public/img/user.svg" alt="" />
              </Link>
            </button>
          </>
        )}
        <button className={styles.button}>
          <Link to={ROUTES.CART}>
            <img src="../../public/img/cart.svg" alt="" />
          </Link>
        </button>
      </div>
    </div>
  );
};
