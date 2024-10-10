import React, { useEffect } from "react";
import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { SocialMediaButton } from "@/shared/ui/SocialMediaButton";
import { refreshAccessToken } from "@/entities/user";
import { NavbarAdmin } from "@/widgets/NavbarAdmin";
import styles from "./Layout.module.css";
import { fetchLikedProducts } from "@/entities/user/model/userThunks";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";

interface LayoutProps {
  isAdmin?: boolean;
}
  
const Layout: React.FC<LayoutProps> = ({ isAdmin = false }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(refreshAccessToken());
    if (user?.id) {
      dispatch(fetchLikedProducts());
    }
  }, [dispatch, user?.id]);

  return (
    <div className={styles.container}>
      <Navbar />
      {isAdmin && <NavbarAdmin />}
      <main className={styles.root}>
        <Outlet />
      </main>
      <Footer />
      <SocialMediaButton />
    </div>
  );
};

export default Layout;
