import { Navbar } from "@/widgets/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.root}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
