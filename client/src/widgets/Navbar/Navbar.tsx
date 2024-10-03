// Navbar.tsx
import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbarButton}>
          <button className={styles.button}>
            <img src="../../public/menu.svg" alt="" />
          </button>
        </div>
        <div className={styles.navbarLogo}>
          <img src="../../public/logo.svg" alt="" />
        </div>
        <div className={styles.navbarLinks}>
          <button className={styles.button}>
            <img src="../../public/search.svg" alt="" />
          </button>
          <button className={styles.button}>
            <Link to={ROUTES.FAVORITES}>
              <img src="../../public/favorites.svg" alt="" />
            </Link>
          </button>
          <button className={styles.button}>
            <Link to={ROUTES.PROFILE}>
              <img src="../../public/user.svg" alt="" />
            </Link>
          </button>
          <button className={styles.button}>
            <Link to={ROUTES.CART}>
              <img src="../../public/cart.svg" alt="" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
