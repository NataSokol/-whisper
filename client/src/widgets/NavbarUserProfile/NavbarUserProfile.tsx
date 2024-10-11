import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavbarUserProfile.module.css";
import { ROUTES } from "@/app/router/routes";
import { logout } from "@/entities/user";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";

export const NavbarUserProfile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.HOME);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.leftContent}>
        <ul>
          <li>
            <div className={styles.lii}>
              <Link to={ROUTES.INFO}>Личные данные</Link>
            </div>
          </li>
          <li>
            <div className={styles.lii}>
              <Link to={ROUTES.HISTORY}>История заказов</Link>
            </div>
          </li>

          <li>
            <div className={styles.lii}>
              <Link to={ROUTES.DISCOUNT}>Программа лояльности</Link>
            </div>
          </li>
          <li>
            <div>
              <button className={styles.button} onClick={handleLogout}>
                {" "}
                Выйти
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
