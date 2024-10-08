import { userReducer } from "@/entities/user";
import { adminCategoryReducer, userCategoryReducer } from "@/entities/category";
import { collectionReducer } from "@/entities/collection";
import { configureStore } from "@reduxjs/toolkit";
import { subcategoryReducer } from "@/entities/subcategory";
import { productReducer } from "@/entities/product";
import { cartItemReducer } from "@/entities/cartitem";
import { cartReducer } from "@/entities/cart";

const store = configureStore({
  reducer: {
    user: userReducer, 
    adminCategory: adminCategoryReducer,
    userCategory: userCategoryReducer,
    collection: collectionReducer,
    subcategory: subcategoryReducer,
    product: productReducer,
    cartItem: cartItemReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
