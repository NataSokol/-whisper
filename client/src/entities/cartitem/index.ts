export { CartItemService } from "./api";
export type {CartItem, CartItemList } from "./model";
import cartItemReducer from "./model/cartItemSlice";

export { getCartItemById, createCartItem, updateCartItem, deleteCartItem} from "./model/cartItemThunck";

export { cartItemReducer }