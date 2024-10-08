import { axiosInstance } from "@/shared/lib/axiosInstance";
import { CreateProductSizeRequest, ProductSize } from "../model";

export class ProductSizeService {
  static async getAllProductSize() {
    const response = await axiosInstance.get("/productsizes");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get product sizes");
    }
  }

  static async getProductSize(id: number) {
    const response = await axiosInstance.get(`/productsizes/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get product");
    }
  }

  static async createProductSize(data: CreateProductSizeRequest) {
    const response = await axiosInstance.post("/productsizes", data);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Failed to create productsize");
    }
  }

  static async updateProductSize(
    id: number,
    productSize: Partial<ProductSize>
  ) {
    const response = await axiosInstance.put(
      `/productsizes/${id}`,
      productSize
    );
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
