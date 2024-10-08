import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./NavbarAdmin.module.css";

export const NavbarAdmin: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarLinks}>
        <Button theme={ThemeButton.LIGHT}>
          <Link to={ROUTES.ADMIN_CATEGORIES}>Категории</Link>
        </Button>
        <Button theme={ThemeButton.LIGHT}>
          <Link to={ROUTES.ADMIN_COLLECTIONS}>Коллекции</Link>
        </Button>

        <Button theme={ThemeButton.LIGHT}>
          <Link to={ROUTES.ADMIN_SUBCATEGORY}>Подкатегории</Link>
        </Button>

        <Button theme={ThemeButton.LIGHT}>
          <Link to={ROUTES.ADMIN_PRODUCTS}>Продукты</Link>
        </Button>
      </div>
    </div>
  );
};
