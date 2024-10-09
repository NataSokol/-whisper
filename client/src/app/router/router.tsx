import { createBrowserRouter } from "react-router-dom";
import {
  AdminCategoryPage,
  AdminCollectionPage,
  AdminOneProductPage,
  AdminPage,
  AdminProductPage,
  AdminSubCategoryPage,
  MainPage,
  SignInPage,
  SignUpPage,
} from "@/pages";
import { ROUTES } from "./routes";
import { PublicRoute } from "@/shared/ui/PublicRoute";
import { FogForm } from "@/features/auth/ui/FogetPas/FogForm";
import ResetPassword from "@/pages/ResetPasswordPage/ResetPassword";
import { UserInfoPage, UserPage } from "@/pages/UserPage";
import { HistoryPage } from "@/pages/HistoryPage/HistoryPage";
import { AddressPage } from "@/pages/AddressPage/AddressPage";
import { CardPage } from "@/pages/CardPage/CardPage";
import Layout from "./Layout/Layout";
import ProductPage from "@/pages/ProductPage/ProductPage";
import { AllProductsPage } from "@/pages/AllProductsPage";
import { FavoritePage } from "@/pages/FavoritePage";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTES.ADMIN,
        element: <AdminPage />,
        children: [
          {
            path: ROUTES.ADMIN_CATEGORIES,
            element: <AdminCategoryPage />,
          },
          {
            path: ROUTES.ADMIN_COLLECTIONS,
            element: <AdminCollectionPage />,
          },

          {
            path: ROUTES.ADMIN_SUBCATEGORY,
            element: <AdminSubCategoryPage />,
          },

          {
            path: ROUTES.ADMIN_PRODUCTS,
            element: <AdminProductPage />,
          },
          {
            path: ROUTES.ADMIN_PRODUCT,
            element: <AdminOneProductPage />,
          },
        ],
      },
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
      {
        path: ROUTES.SIGNIN,
        element: <SignInPage />,
      },

      {
        path: ROUTES.FAVORITES,
        element: <FavoritePage />,
      },

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

      // {
      //   path: `${ROUTES.CATALOG}/:productId`,
      //   element: < />,
      // },

      {
        path: `${ROUTES.CATALOG}/:productId`,
        element: <ProductPage />,
      },

      //   {
      //     path: ROUTES.FAVORITES,
      //     element: <FavoritesPage />,
      //   },

      //   {
      //     path: ROUTES.PROFILE,
      //     element: <ProfilePage />,
      //   },
      {
        path: ROUTES.CATALOG,
        element: <AllProductsPage />,
      },

      //   {
      //     path: ROUTES.ERROR,
      //     element: <ErrorPage />,
      //   },
    ],
  },
]);
