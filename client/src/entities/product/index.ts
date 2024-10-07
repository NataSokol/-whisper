export { ProductServices } from "./api";
export { getAllProducts } from "./model/productThunk";
import productReducer from './model/productSlice'

export type {Product, ProductList} from './model'

export { productReducer }

