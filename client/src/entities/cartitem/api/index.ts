import { CartItemResponse } from "../model";
import { axiosInstance } from "@/shared/lib/axiosInstance";

export class CartItemService {
  static async getCartItemById(id: number) {
    const response = await axiosInstance.get<CartItemResponse>(
      `/cartItems/${id}`
    );
    console.log(response);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  static async createCartItem(
    cartId: number,
    productId: number,
    quantity: number,
    productSizeId: number,
    productColorId: number
  ) {
    const response = await axiosInstance.post<CartItemResponse>("/cartItems", {
      cartId,
      productId,
      quantity,
      productSizeId,
      productColorId,
    });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  static async updateCartItem(id: number, quantity: number) {
    const response = await axiosInstance.put<CartItemResponse>(
      `/cartItems/${id}`,
      { quantity }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  static async deleteCartItem(id: number) {
    const response = await axiosInstance.delete<CartItemResponse>(
      `/cartItems/${id}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }
}
