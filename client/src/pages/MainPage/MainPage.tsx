import React from "react";
import styles from "./MainPage.module.css";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";

export const MainPage: React.FC = () => {
  return (
  <div className={styles.container}>
    <div className={styles.videoContainer}>
        <img src="http://placehold.it/1480x780/" alt="к покупкам" />
        {/* <video src=""></video> */}
        <button><Link className={styles.link} to={ROUTES.CATALOG}>к покупкам</Link></button>
        
    </div>
    <div className={styles.collections}>
        <div className={styles.headers}>
            <div>коллекции</div>
            {/* <link>смотреть все</link> */}
        </div>
        {/* collections.map */}
    </div>
    <div className={styles.catalogLink}>
        <img src="http://placehold.it/1344x500/" alt="к покупкам" />
        <button><Link className={styles.link} to={ROUTES.CATALOG}>к покупкам</Link></button>
    
    </div>
  </div>
  )
};

