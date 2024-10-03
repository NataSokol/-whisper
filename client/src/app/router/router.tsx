import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "./Layout/Layout";
import {MainPage} from "@/pages/MainPage/MainPage";


export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      //   {
      //     path: ROUTES.AUTH,
      //     element: (
      //       <PublicRoute>
      //         <LoginPage />
      //       </PublicRoute>
      //     ),
      //   },

      //   {
      //     path: ROUTES.CART,
      //     element: (
      //         <CartPage />
      //     ),
      //   },
      {
        path: ROUTES.HOME,
        element: <MainPage />,
      },

    //   {
    //     path: ROUTES.FAVORITES,
    //     element: <FavoritesPage />,
    //   },

    //   {
    //     path: ROUTES.PROFILE,
    //     element: <ProfilePage />,
    //   },

    //   {
    //     path: ROUTES.ERROR,
    //     element: <ErrorPage />,
    //   },
    ],
  },
]);
