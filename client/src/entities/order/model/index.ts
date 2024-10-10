import { Product } from "@/entities/product";
import { Color } from "@/entities/color";
import { ProductSize } from "@/entities/productsize";

export type Order = {
  id: number;
  total: number;
  comment: string;
  adress: string;
  status: string;

  userId: number;
  orderItem: OrderItemList;
  createdAt: Date;
  updatedAt: Date;
};

export type OrderItem = {
  id: number;
  orderId: number;
  productId: number;
  Product: Product;
  ProductSize: ProductSize;
  colorProduct: {
    colorId: number;
    productId: number;
    createdAt: Date;
    updatedAt: Date;
    Color: Color;
  };
  productSizeId: number;
  productColorId: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
};
export type CreateOrderItem = Omit<OrderItem, 'id' | 'createdAt' | 'updatedAt'>
export type OrderItemList = OrderItem[];
export type OrderList = Order[];
//! RESPONSE
export type OrderResponse = {
  orders: OrderList;
  message: string;
};

export type OneOrderResponse = {
  order: Order;
  message: string;
};
