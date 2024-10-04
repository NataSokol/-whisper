import { Navbar } from "@/widgets/Navbar";
import { NavbarAdmin } from "@/widgets/NavbarAdmin";
import React from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  isAdmin?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ isAdmin = true }) => {
  return (
    <>
      <Navbar />
      {isAdmin && <NavbarAdmin />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
