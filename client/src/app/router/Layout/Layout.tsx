
import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { SocialMediaButton } from "@/shared/ui/SocialMediaButton";
    import React, { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { refreshAccessToken } from "@/entities/user";


const Layout: React.FC = () => {
    const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshAccessToken());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <main className={styles.root}>
        <Outlet />
      </main>
      <Footer />
      <SocialMediaButton />
    </>
  );

};

export default Layout;
