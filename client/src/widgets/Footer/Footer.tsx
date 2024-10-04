import React from "react";
import styles from "./Footer.module.css";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.containerLinks}>
          <div className={styles.footerLogo}>
            <img src="../../public/img/logo.svg" alt="" />
          </div>
          <div className={styles.footerMenuLinks}>
            <span className={styles.footerTitleLinks}>ПОКУПАТЕЛЯМ</span>
            <Link to={ROUTES.DELPAY} className={styles.footerLink}>
              Доставка и оплата
            </Link>
            <Link to={ROUTES.REFUND} className={styles.footerLink}>
              Возврат
            </Link>
            <Link to={ROUTES.QUESTANSW} className={styles.footerLink}>
              Вопросы и ответы
            </Link>
            <Link to={ROUTES.GIFTCARD} className={styles.footerLink}>
              Подарочные карты
            </Link>
            <Link to={ROUTES.LOYALTY}>Лояльность</Link>
          </div>
          <div className={styles.footerMenuLinks}>
            <span className={styles.footerTitleLinks}>О КОМПАНИИ</span>
            <Link to={ROUTES.ABOUT} className={styles.footerLink}>
              О нас
            </Link>
            <Link to={ROUTES.FEEDBACK} className={styles.footerLink}>
              Отзывы
            </Link>
            <Link to={ROUTES.CONTACTS}>Контакты</Link>
          </div>
        </div>
        <div className={styles.containerPolicy}>
          <div className={styles.footerMenuPolicy}>
            <Link to={ROUTES.POLICY} className={styles.footerLinkPolicy}>
              Политика конфиденциальности
            </Link>
            <Link to={ROUTES.OFERTA}>Публичная оферта</Link>
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
