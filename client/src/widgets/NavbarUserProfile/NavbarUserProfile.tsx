import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavbarUserProfile.css";
//import styles from "./NavbarUserProfile.css";
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
    <div className="navbar">
      <div className="left-content">
        <ul>
          <li>
            <div>
              <Link to={ROUTES.INFO}>Личные данные</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to={ROUTES.FOG}>История заказов</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to={ROUTES.FOG}>Адреса</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to={ROUTES.FOG}>Программа лояльности</Link>
            </div>
          </li>
          <li>
            <div>
              <button onClick={handleLogout}> Выйти</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
