import { NavbarUserProfile } from "@/widgets/NavbarUserProfile";
import { Outlet } from "react-router-dom";
import styles from "./User.module.css";

export function UserPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.navbar1}>
       
        <NavbarUserProfile />
        <Outlet />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
