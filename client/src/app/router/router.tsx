import { createBrowserRouter } from "react-router-dom";
import { AdminCategoryPage, AdminCollectionPage, MainPage, SignInPage, SignUpPage } from "@/pages";
import { ROUTES } from "./routes";
import Layout from "./Layout/Layout";
import AdminPage from '@/pages/AdminPage/AdminPage/AdminPage';
import { PublicRoute } from "@/shared/ui/PublicRoute";



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
          // {
          //   path: ROUTES.ADMIN_PRODUCTS,
          //   element: <AdminProductsPage />,
          // },
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
