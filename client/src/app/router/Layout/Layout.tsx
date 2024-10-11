import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { SocialMediaButton } from "@/shared/ui/SocialMediaButton";
import { refreshAccessToken } from "@/entities/user";
import { fetchLikedProducts } from "@/entities/user/model/userThunks";
import { useAppSelector } from "@/shared/hooks/useReduxHooks";
import styles from "./Layout.module.css";
import { getCart } from "@/entities/cart";

const Layout: React.FC = () => {
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
    if (user?.id) {
      dispatch(fetchLikedProducts());
    }
  }, [dispatch, user?.id]);


  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.root}>
        <Outlet />
      </main>
      <Footer />
      <SocialMediaButton />
    </div>
  );
};

export default Layout;
