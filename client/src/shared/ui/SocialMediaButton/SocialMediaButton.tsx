import React, { useCallback, useEffect, useState } from "react";
import styles from "./SocialMediaButton.module.css";
import { ROUTES } from "@/app/router/routes";
import { Link } from "react-router-dom";

export const SocialMediaButton: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShow(true);
    } else {
      setShow(false);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, handleScroll]);

  return (
    <div className={`${styles.container} ${show ? styles.show : styles.hide}`}>
      <Link to={ROUTES.VK}>
        <img src="../../public/img/vk.svg" className={styles.image} alt="VK" />
      </Link>
      <Link to={ROUTES.TG}>
        <img src="../../public/img/tg.svg" className={styles.image} alt="TG" />
      </Link>
    </div>
  );
};
