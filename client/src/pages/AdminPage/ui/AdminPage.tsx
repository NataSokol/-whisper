import React from "react";
import { NavbarAdmin } from "@/widgets/NavbarAdmin";
import { Outlet } from "react-router-dom";
// import styles from "./AdminPage.module.css";

export const AdminPage: React.FC = () => {
  return (
    <div>
      <NavbarAdmin />
      <Outlet />
    </div>
  );
};

export default AdminPage;