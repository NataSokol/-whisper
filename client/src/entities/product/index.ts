import productReducer from "./model/productSlice";

export { ProductServices } from "./api";
export type { Product, ProductList } from "./model";
export { getAllProducts } from "./model/productThunk";
export { AdminProductItem } from "./ui/AdminProductItem";

export { productReducer };
