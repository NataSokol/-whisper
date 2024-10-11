import { userReducer } from "@/entities/user";
import { adminCategoryReducer, userCategoryReducer } from "@/entities/category";
import { collectionReducer } from "@/entities/collection";
import { configureStore } from "@reduxjs/toolkit";
import { subCategoryReducer } from "@/entities/subcategory";
import { productReducer } from "@/entities/product";
import { cartReducer } from "@/entities/cart";
import { productSizeReducer } from "@/entities/productsize";
import { orderReducer } from "@/entities/order";
import { colorReducer } from '@/entities/color';


const store = configureStore({
  reducer: {
    user: userReducer,
    adminCategory: adminCategoryReducer,
    userCategory: userCategoryReducer,
    collection: collectionReducer,
    subcategory: subCategoryReducer,
    product: productReducer,
    cart: cartReducer,
    productSize: productSizeReducer,
    order: orderReducer,

    color: colorReducer

  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
