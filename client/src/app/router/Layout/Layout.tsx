import React, { useEffect } from "react";
import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { SocialMediaButton } from "@/shared/ui/SocialMediaButton";
import { refreshAccessToken } from "@/entities/user";
import { NavbarAdmin } from "@/widgets/NavbarAdmin";
import styles from "./Layout.module.css";
import { getCart } from "@/entities/cart";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";

interface LayoutProps {
  isAdmin?: boolean;
}
const Layout: React.FC<LayoutProps> = ({ isAdmin = false }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const {cartCount} = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (user?.id){
      dispatch(getCart());
    }
  }, [dispatch, user?.id, cartCount]);

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
