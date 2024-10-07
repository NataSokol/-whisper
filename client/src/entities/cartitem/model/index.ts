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
    // Color: Color;
//! потом переписать, но пока работаем с костылем на бд поэтому тут тип описан так 
    colorProduct: {
        colorId: number;
        productId: number;
        createdAt: Date;
        updatedAt: Date;
        Color: Color
    }
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
};

export type CreateCartItem = Omit<CartItem, 'id' | 'createdAt' | 'updatedAt'>

export type CartItemList = CartItem[]

// RESPONSE
export type CartItemResponse = {
    message: string;
    cartItem: CartItem;
  }

  export type CartItemListResponse = {
    message: string;
    cartItemList: CartItemList;
  }