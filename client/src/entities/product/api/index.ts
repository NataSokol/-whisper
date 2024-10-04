import { axiosInstance } from "@/shared/lib/axiosInstance";

export class ProductServices {
  static async getAllProducts() {
    const response = await axiosInstance.get("/products");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get products");
    }
  }
}
