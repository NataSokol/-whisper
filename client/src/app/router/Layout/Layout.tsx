import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { SocialMediaButton } from "@/shared/ui/SocialMediaButton";
const Layout: React.FC = () => {
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
