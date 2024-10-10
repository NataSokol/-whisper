import React from "react";
import styles from "./MainPage.module.css";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";
import { CollectionList } from "@/widgets/CollectionList";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";

export const MainPage: React.FC = () => {
  

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.video}>
          <source
            src="https://www.2moodstore.com/upload/iblock/58a/pqlllcbhfbi958uir31db1rkd3fzj2ii.mp4"
            type="video/mp4"
          />
          Ваш браузер не поддерживает тег видео.
        </video>
        <Link className={styles.linkOnVideo} to={ROUTES.CATALOG}>
          <Button theme={ThemeButton.LIGHT} className={styles.buttonLink}>
            к покупкам
          </Button>
        </Link>
      </div>
      <div className={styles.collections}>
        <div className={styles.headers}>
          <div className={styles.headerTitle}>КОЛЛЕКЦИИ</div>
          <Link to={ROUTES.CATALOG} className={styles.headerLink}>
            Смотреть все
          </Link>
        </div>
        <CollectionList />
      </div>
      <div className={styles.discountLink}>
        <img src="../../public/img/whisper2.jpg" alt="к покупкам" />
        <div className={styles.discount}>
          <p>ПОЛУЧИТЕ СКИДКУ</p>
          <p>от 3-х позиций в корзине</p>
          <Link className={styles.link} to={ROUTES.CATALOG}>
            <Button theme={ThemeButton.LIGHT} className={styles.buttonLink}>к покупкам</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
