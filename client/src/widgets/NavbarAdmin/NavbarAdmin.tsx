import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./NavbarAdmin.module.css";

export const NavbarAdmin: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarLinks}>
        <Link to={ROUTES.ADMIN_CATEGORIES}>
          <Button theme={ThemeButton.LIGHT}>Категории</Button>
        </Link>
        <Link to={ROUTES.ADMIN_COLLECTIONS}>
          <Button theme={ThemeButton.LIGHT}>Коллекции</Button>
        </Link>
        <Link to={ROUTES.ADMIN_SUBCATEGORY}>
          <Button theme={ThemeButton.LIGHT}>Подкатегории</Button>
        </Link>
        <Link to={ROUTES.ADMIN_PRODUCTS}>
          <Button theme={ThemeButton.LIGHT}>Продукты</Button>
        </Link>
      </div>
    </div>
  );
};
