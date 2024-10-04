import React, { useEffect } from "react";
import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { SocialMediaButton } from "@/shared/ui/SocialMediaButton";
import { refreshAccessToken } from "@/entities/user";
import { NavbarAdmin } from "@/widgets/NavbarAdmin";
import styles from "./Layout.module.css";

interface LayoutProps {
  isAdmin?: boolean;
}
      
const Layout: React.FC<LayoutProps> = ({ isAdmin = false }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshAccessToken());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {isAdmin && <NavbarAdmin />}
      <main className={styles.root}>
        <Outlet />
      </main>
      <Footer />
      <SocialMediaButton />
    </>
  );
};

export default Layout;