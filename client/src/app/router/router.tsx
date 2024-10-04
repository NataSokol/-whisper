import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "./Layout/Layout";
import AdminPage from '@/pages/AdminPage/ui/AdminPage';
import AdminCategoryPage from '@/pages/AdminPage/ui/AdminCategoryPage';
import AdminCollections from '@/pages/AdminPage/ui/AdminCollectionPage';

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
            element: <AdminCollections />,
          },
          // {
          //   path: ROUTES.ADMIN_PRODUCTS,
          //   element: <AdminProductsPage />,
          // },
        ],
      },

      // ------

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
