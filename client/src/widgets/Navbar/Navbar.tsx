import React, { useState, useRef, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { getAllProducts } from "@/entities/product";
import { SidebarUser } from "../SidebarUser";
import { Sidebar } from "../Sidebar";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import debounce from "lodash.debounce";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const { products } = useAppSelector((state) => state.product);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState<number>(9);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const handleToggleNavbarVisibility = () => {
    setIsNavbarVisible((prev) => !prev);
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
    setTimeout(() => {
      const input = searchContainerRef.current?.querySelector("input");
      input?.focus();
    }, 0);
  };

  const handleSearchInputFocus = () => {
    setIsInputFocused(true);
  };

  const toggleCart = () => {
    setCartCount((prev) => (prev > 0 ? prev - 1 : 1));
  };

  const debouncedSetSearchValue = useMemo(
    () =>
      debounce((value: string) => {
        setSearchValue(value);
      }, 300),
    []
  );

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedSetSearchValue(e.target.value);
  };

  const filteredProducts = useMemo(() => {
    if (!searchValue.trim()) return [];
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [products, searchValue]);

  useEffect(() => {
    dispatch(getAllProducts());
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
  }, [isSearchActive, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      debouncedSetSearchValue.cancel();
    };
  }, [debouncedSetSearchValue]);

  useEffect(() => {
    setIsInputFocused(false);
    setIsSearchActive(false);
    setInputValue("");
    setSearchValue("");
  }, [location]);

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      <Sidebar />
      <div className={styles.navbarLogo}>
        <Link to={ROUTES.HOME}>
          <img src="../../public/img/logo.svg" alt="Logo" />
        </Link>
      </div>
      <div
        className={`${styles.navbarLinks} ${
          isSearchActive ? styles.hideButtons : ""
        }`}
      >
        {user?.isAdmin && (
          <Link
            to={ROUTES.ADMIN}
            className={`${styles.toggleButton} ${styles.adminButton}`}
          >
            <button
              onClick={handleToggleNavbarVisibility}
              className={styles.toggleButton}
            >
              <img src="../../public/img/admin.svg" alt="admin" />
            </button>
          </Link>
        )}
        <div className={isNavbarVisible ? "visible" : "hidden"}></div>
        <div
          className={`${styles.searchContainer} ${
            isSearchActive ? styles.active : ""
          } ${isInputFocused ? styles.focused : ""}`}
          ref={searchContainerRef}
        >
          <div className={styles.searchContent}>
            <img
              src="../../public/img/search.svg"
              alt="Search"
              className={styles.searchIcon}
              onClick={handleSearchClick}
            />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Что вы хотите найти?"
              onChange={handleSearchInputChange}
              onFocus={handleSearchInputFocus}
              value={inputValue}
              maxLength={30}
            />
          </div>
          {isInputFocused && filteredProducts.length > 0 && (
            <ul className={styles.searchResults}>
              {filteredProducts.map((product) => (
                <Link to={`${ROUTES.CATALOG}/${product.id}`} key={product.id}>
                  <li className={styles.searchResultItem}>{product.title}</li>
                </Link>
              ))}
            </ul>
          )}
          {isInputFocused &&
            searchValue.trim() !== "" &&
            filteredProducts.length === 0 && (
              <div className={styles.noResults}>Ничего не найдено</div>
            )}
        </div>
        {!isSearchActive && (
          <>
            <button className={styles.button}>
              <Link to={ROUTES.FAVORITES} className={styles.favoritesLink}>
                <img src="../../public/img/favorites.svg" alt="Favorites" />
                <span
                  className={`${styles.notificationDot} ${
                    (user?.LikedProducts ?? []).length > 0
                      ? styles.notificationDotActive
                      : ""
                  }`}
                ></span>
              </Link>
            </button>

            <button className={styles.button}>
              {user ? (
                <Link to={ROUTES.INFO}>
                  <img src="../../public/img/user.svg" alt="" />
                </Link>
              ) : (
                <SidebarUser />
              )}
            </button>
          </>
        )}
        <button className={styles.button} onClick={toggleCart}>
          <Link to={ROUTES.CART} className={styles.cartLink}>
            <img src="../../public/img/cart.svg" alt="Cart" />
            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </Link>
        </button>
      </div>
    </div>
  );
};
