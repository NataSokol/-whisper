import { createBrowserRouter } from "react-router-dom";
import {
  AdminCategoryPage,
  AdminCollectionPage,
  AdminOneProductPage,
  AdminPage,
  AdminProductPage,
  AdminSubCategoryPage,
  AllProductsPage,
  CartPage,
  MainPage,
  ProductPage,
  SignInPage,
  SignUpPage,
} from "@/pages";
import { ROUTES } from "./routes";
import { PublicRoute } from "@/shared/ui/PublicRoute";
import { FogForm } from "@/features/auth/ui/ForgetPas/FogForm";
import ResetPassword from "@/pages/ResetPasswordPage/ResetPassword";
import { UserInfoPage, UserPage } from "@/pages/UserPage";
import { HistoryPage } from "@/pages/HistoryPage/HistoryPage";
import { AddressPage } from "@/pages/AddressPage/AddressPage";
import Layout from "./Layout/Layout";
import { FavoritePage } from "@/pages/FavoritePage";
import { ComingSoonPage } from "@/pages/ComingSoonPage";

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

      {
        path: ROUTES.CART,
        element: <CartPage />,
      },
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

      {
        path: ROUTES.DELPAY,
        element: <ComingSoonPage />,
      },
      {
        path: ROUTES.REFUND,
        element: <ComingSoonPage />,
      },
      {
        path: ROUTES.QUESTANSW,
        element: <ComingSoonPage />,
      },
      {
        path: ROUTES.GIFTCARD,
        element: <ComingSoonPage />,
      },
      {
        path: ROUTES.LOYALTY,
        element: <ComingSoonPage />,
      },
      {
        path: ROUTES.ABOUT,
        element: <ComingSoonPage />,
      },
      {
        path: ROUTES.CONTACTS,
        element: <ComingSoonPage />,
      },
      {
        path: ROUTES.FEEDBACK,
        element: <ComingSoonPage />,
      },
      {
        path: ROUTES.POLICY,
        element: <ComingSoonPage />,
      },
      {
        path: ROUTES.OFERTA,
        element: <ComingSoonPage />,
      },
      {
        path: ROUTES.SIZECHART,
        element: <ComingSoonPage />,
      },

      //   {
      //     path: ROUTES.ERROR,
      //     element: <ErrorPage />,
      //   },
    ],
  },
]);
