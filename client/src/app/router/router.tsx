import { createBrowserRouter } from "react-router-dom";

import { MainPage, SignInPage, SignUpPage } from "@/pages";
import { ROUTES } from "./routes";
import Layout from "./Layout/Layout";

import { PublicRoute } from "@/shared/ui/PublicRoute";
import { FogForm } from "@/features/auth/ui/FogetPas/FogForm";
import ResetPassword from "@/pages/ResetPasswordPage/ResetPassword";
import { UserInfoPage, UserPage } from "@/pages/UserPage";
import { HistoryPage } from "@/pages/HistoryPage/HistoryPage";
import { AddressPage } from "@/pages/AddressPage/AddressPage";
import { CardPage } from "@/pages/CardPage/CardPage";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
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
      {
        path: ROUTES.SIGNIN,
        element: <SignInPage />,
      },

      //   {
      //     path: ROUTES.FAVORITES,
      //     element: <FavoritesPage />,
      //   },

      {
        path: ROUTES.PROFILE,
        element: <UserPage />,
        children: [
          {
            path: ROUTES.INFO,
            element: <UserInfoPage />,
          },
          {
            path: ROUTES.HISTORY,
            element: <HistoryPage />,
          },
          {
            path: ROUTES.ADRESS,
            element: <AddressPage />,
          },
          {
            path: ROUTES.CARD,
            element: <CardPage />,
          },
        ],
      },
      {
        path: ROUTES.FOG,
        element: <FogForm />,
      },
      {
        path: ROUTES.CHANGE,
        element: <ResetPassword />,
      },

      //   {
      //     path: ROUTES.ERROR,
      //     element: <ErrorPage />,
      //   },
    ],
  },
]);
