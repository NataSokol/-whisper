import React from "react";
import styles from "./MainPage.module.css";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import Slider from "@/widgets/Slider/Slider";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";

export const MainPage: React.FC = () => {
  const collections = useAppSelector((state) => state.collection.collections);
  const collectionImages =
    collections?.map((collection) => collection.image) || [];
  const collectionTitles =
    collections?.map((collection) => collection.title) || [];
  const collectionIds = collections?.map((collection) => collection.id) || [];

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <img className={styles.image}
          src="https://image.hm.com/assets/hm/7b/60/7b60e153849ff4b0cb451ba131068d7f3934bfd0.jpg?imwidth=1260"
          alt=""
        />
        <video autoPlay loop muted className={styles.video}>
          <source
            src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/startpage-assets/wk41/7460-4x5-Film-startpage-wk41.mp4"
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
        <div>
          <Slider
            collectionId={collectionIds}
            collectionTitle={collectionTitles}
            images={collectionImages}
          />
        </div>
      </div>
      <div className={styles.discountLink}>
        <img src="../../public/img/whisper2.jpg" alt="к покупкам" />
        <div className={styles.discount}>
          <p>ПОЛУЧИТЕ СКИДКУ</p>
          <p>от 3-х позиций в корзине</p>
          <Link className={styles.link} to={ROUTES.CATALOG}>
            <Button theme={ThemeButton.LIGHT} className={styles.buttonLink}>
              к покупкам
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
