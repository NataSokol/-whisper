import React from "react";
import styles from "./ComingSoonPage.module.css";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";

export const ComingSoonPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Собаня!</h1>
      <p>
        Этот раздел находится в разработке. Мы работаем над улучшениями и скоро
        представим его вам. Спасибо за понимание!
      </p>
      <Link to={ROUTES.HOME} className={styles.link}>Вернуться на главную</Link>
    </div>
  );
};

export default ComingSoonPage;
