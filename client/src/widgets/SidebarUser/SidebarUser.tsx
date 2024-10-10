import React, { useState, useRef, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { SignInForm } from "@/features/auth/ui/SignInForm";
import { SignUpForm } from "@/features/auth/ui/SignUpForm";
import { FogForm } from "@/features/auth/ui/FogetPas";

export const SidebarUser: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoginActive, setIsLoginActive] = useState<boolean>(true);
  const [isFogActive, setIsFogActive] = useState<boolean>(false);
  const [isForgotPasswordVisible, setIsForgotPasswordVisible] =
    useState<boolean>(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      setIsLoginActive(true);
      setIsFogActive(false);
      setIsForgotPasswordVisible(true);
    }
  };

  const handleLoginClick = () => {
    setIsLoginActive(true);
    setIsFogActive(false);
    setIsForgotPasswordVisible(true);
  };

  const handleRegisterClick = () => {
    setIsLoginActive(false);
    setIsFogActive(false);
    setIsForgotPasswordVisible(false);
  };

  const handleFogClick = () => {
    setIsFogActive(true);
    setIsLoginActive(false);
    setIsForgotPasswordVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsLoginActive(true);
        setIsFogActive(false);
        setIsForgotPasswordVisible(true);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <button
        onClick={toggleSidebar}
        className={`${styles.sidebarButtonUser} ${isOpen ? styles.opened : ""}`}
        ref={buttonRef}
      >
        <img src="../../public/img/user.svg" alt="user" />
      </button>
      {isOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}

      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
        ref={sidebarRef}
      >
        <div className={styles.conteinerRegist}>
          <div className={styles.conteinerRegistSenter}>
            {!isFogActive && (
              <h2 className={styles.header}>ВХОД ИЛИ РЕГИСТРАЦИЯ</h2>
            )}

            {!isFogActive && (
              <div className={styles.tabs}>
                <div
                  className={`${styles.tab} ${
                    isLoginActive ? styles.activeTab : ""
                  }`}
                  onClick={handleLoginClick}
                >
                  Вход
                </div>
                <div
                  className={`${styles.tab} ${
                    !isLoginActive ? styles.activeTab : ""
                  }`}
                  onClick={handleRegisterClick}
                >
                  Регистрация
                </div>
              </div>
            )}

            <div style={{ width: "100%" }}>
              {isFogActive ? (
                <FogForm />
              ) : isLoginActive ? (
                <SignInForm />
              ) : (
                <SignUpForm />
              )}
            </div>

            {!isFogActive && isForgotPasswordVisible && (
              <div className={styles.fogPassword} onClick={handleFogClick}>
                Забыли пароль?
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
