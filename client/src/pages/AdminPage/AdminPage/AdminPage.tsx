import React from "react";
import { Outlet } from "react-router-dom";
// import { NavbarAdmin } from "@/widgets/NavbarAdmin";
// import styles from "./AdminPage.module.css";

export const AdminPage: React.FC = () => {
  return (
    <div>
      {/* <NavbarAdmin /> */}
      <Outlet />
    </div>
  );
};

export default AdminPage;