import React from "react";
import styles from "./NotFoundPage.module.css";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <video autoPlay loop muted>
        <source
          src="https://static.vecteezy.com/system/resources/previews/022/758/021/mp4/animated-bw-dev-specialist-404-error-coding-empty-state-4k-footage-with-alpha-channel-transparency-flash-message-monochromatic-failed-loading-animation-for-page-not-found-web-ui-design-video.mp4"
          type="video/mp4"
        />
        Ваш браузер не поддерживает тег видео.
      </video>
      <Link to={ROUTES.HOME}>
        <button className={styles.button}>Вернуться на главную</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
