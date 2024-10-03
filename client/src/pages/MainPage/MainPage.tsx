import React from "react";
import styles from "./MainPage.module.css";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";
import { CollectionList } from "@/widgets/CollectionList";

export const MainPage: React.FC = () => {
  return (
  <div className={styles.container}>
    <div className={styles.videoContainer}>
        <img src="http://placehold.it/1480x780/" alt="к покупкам" />
        {/* <video src=""></video> */}
        <Link className={styles.linkOnVideo} to={ROUTES.CATALOG}><button className={styles.button}>к покупкам</button></Link>
        
    </div>
    <div className={styles.collections}>
        <div className={styles.headers}>
            <div>КОЛЛЕКЦИИ</div>
            <Link to={ROUTES.CATALOG}>Cмотреть все</Link>
        </div>
        <CollectionList/>
    </div>
    <div className={styles.discountLink}>
        <img src="http://placehold.it/1344x500/" alt="к покупкам" />
        <div className={styles.discount}>
<p>ПОЛУЧИТЕ СКИДКУ</p>
<p>от 3-х позиций в корзине</p>
        <Link className={styles.link} to={ROUTES.CATALOG}><button>к покупкам</button></Link>
        </div>
    </div>
  </div>
  )
};

