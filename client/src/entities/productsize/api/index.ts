import { axiosInstance } from "@/shared/lib/axiosInstance";
import { ProductSize } from '../model';

export class ProductSizeService {
  static async updateProductSize(id: number, productSize: ProductSize) {
    const response = await axiosInstance.put(`/productsizes/${id}`, productSize);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to update product size");
    }
  }

  static async deleteProductSize(id: number) {
    const response = await axiosInstance.delete(`/productsizes/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to delete product size");
    }
  }
}
