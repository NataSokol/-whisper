import { CartItem } from "@/entities/cartitem/model";

export type Cart = {
    id: number;
    userId: number;
    total: number;
    salePrice: number;
    CartItems: CartItem[]
    createdAt: Date;
    updatedAt: Date;
}



// RESPONSE


export type CartResponse = {
  message: string;
  cart: Cart;
}

