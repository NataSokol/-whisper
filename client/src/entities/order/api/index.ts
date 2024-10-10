import { axiosInstance } from "@/shared/lib/axiosInstance";


export class OrderServices {
  static async getAllOrders() {
    const response = await axiosInstance.get("/orders");
    if (response.status === 200) {
      

      return response.data;
    } else {
      throw new Error("Failed to get orders");
    }
  }
  static async getOrder(orderId: number) {
    
    
    const response = await axiosInstance.get(`/orders/${orderId}`);
    
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get order");
    }
  }
}
