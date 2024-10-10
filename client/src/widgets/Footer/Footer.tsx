import React from "react";
import styles from "./Footer.module.css";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.containerLinks}>
          <Link to={ROUTES.DELPAY} className={styles.footerLink}>
            ДОСТАВКА И ОПЛАТА
          </Link>
          <Link to={ROUTES.REFUND} className={styles.footerLink}>
            ВОЗВРАТ
          </Link>
          <Link to={ROUTES.SIZECHART} className={styles.footerLink}>
            ТАБЛИЦЫ РАЗМЕРОВ
          </Link>
          <Link to={ROUTES.GIFTCARD} className={styles.footerLink}>
            ПОДАРОЧНАЯ КАРТА
          </Link>
          <Link to={ROUTES.LOYALTY} className={styles.footerLink}>
            ПРОГРАММА ЛОЯЛЬНОСТИ
          </Link>
        </div>
        <div className={styles.containerPolicy}>
          <div className={styles.footerMenuPolicy}>
            <Link to={ROUTES.POLICY} className={styles.footerLinkPolicy}>
              Политика конфиденциальности
            </Link>
            <Link to={ROUTES.OFERTA} className={styles.footerLinkPolicy}>
              Публичная оферта
            </Link>
          </div>
          <div className={styles.footerMenuPolicy}>
            <span className={styles.footerTitlePolicy}>
              © ШЁПОТ 2024 | Все права защищены
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
