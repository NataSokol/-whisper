import {  CartResponse } from "../model";
import { axiosInstance } from "@/shared/lib/axiosInstance";


export class CartService {
    static async getCart() {
        const response = await axiosInstance.get<CartResponse>("/cart");
        // console.log(response);
        
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Failed to get cart");
        }
    }

    // static async createCart() {
    //     const response = await axiosInstance.post<CartResponse>("/cart");
    //     if (response.status === 201) {
    //         return response.data;
    //     } else {
    //         throw new Error("Failed to create cart");
    //     }
    // }

    static async updateCart(cartId: number, total: number, salePrice: number) {
        const response = await axiosInstance.put<CartResponse>(`/cart/${cartId}`, {total, salePrice});
        if (response.status === 200) {
            console.log(response);
            return response.data;
            
        } else {
            throw new Error("Failed to update cart");
        }
    }

    static async deleteCart(cartId: number) {
        const response = await axiosInstance.delete<CartResponse>(`/cart/${cartId}`);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Failed to delete cart");
        }
    }
}
