export { ProductServices } from "./api";
export { getAllProducts } from "./model/productThunk";
import productReduser from './model/productSlice'

export type {Product, ProductList} from './model'

export { productReduser }