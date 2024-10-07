import { Color } from "@/entities/color";
import { Product } from "@/entities/product";
import { ProductSize } from "@/entities/productsize";


export type CartItem = {
    id: number;
    cartId: number;
    productId: number;
    productSizeId: number;
    productColorId: number;
    Product: Product;
    ProductSize: ProductSize;
    Color: Color;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
};



// RESPONSE


export type CartItemResponse = {
    message: string;
    cartItem: CartItem;
  }