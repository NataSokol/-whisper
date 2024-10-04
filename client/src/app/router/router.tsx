import { createBrowserRouter } from "react-router-dom";

import { MainPage, SignInPage, SignUpPage, TaskPage } from "@/pages";
import { ROUTES } from "./routes";
import Layout from "./Layout/Layout";

import { PublicRoute } from "@/shared/ui/PublicRoute";



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

      {
        path: ROUTES.SIGNIN,
        element: (
          <PublicRoute>
            <SignInPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTES.SIGNUP,
        element: <SignUpPage />,
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
