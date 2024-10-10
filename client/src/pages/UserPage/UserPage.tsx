import { NavbarUserProfile } from "@/widgets/NavbarUserProfile";
import { Outlet } from "react-router-dom";
import styles from "./User.module.css";

export function UserPage() {
  return (
    <>
      <div className={styles.navbar1}>
        <NavbarUserProfile />
        <div className={styles.profileContainer2}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
