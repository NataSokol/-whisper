import productReducer from "./model/productSlice";

export { ProductServices } from "./api";
export type { Product, ProductList, OneProductResponse } from "./model";
export {
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} from "./model/productThunk";
export { AdminProductItem } from "./ui/AdminProductItem";

export { productReducer };
