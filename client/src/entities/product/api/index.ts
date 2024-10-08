import { axiosInstance } from "@/shared/lib/axiosInstance";
import { OneProductResponse, Product } from "../model";

export class ProductServices {
  static async getAllProducts() {
    const response = await axiosInstance.get("/products");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get products");
    }
  }

  static async createProduct(productData: FormData): Promise<Product> {
    const response = await axiosInstance.post("/products", productData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Failed to create product");
    }
  }

  static async getProduct(id: number) {
    const response = await axiosInstance.get(`/products/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get product");
    }
  }

  static async updateProduct(
    id: number,
    productData: Partial<Product>
  ): Promise<OneProductResponse> {
    const response = await axiosInstance.put(`/products/${id}`, productData);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to update product");
    }
  }

  static async deleteProduct(id: number): Promise<void> {
    const response = await axiosInstance.delete(`/products/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to delete product");
    }
  }
}