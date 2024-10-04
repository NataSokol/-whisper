import { axiosInstance } from "@/shared/lib/axiosInstance";

export class CategoryServices {
  static async getAllCategory() {
    const response = await axiosInstance.get("/categories");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get categories");
    }
  }

  static async createCategory(title: string) {
    const response = await axiosInstance.post("/categories", { title });
    if (response.status === 201) {
      return response.data.category;
    } else {
      throw new Error("Failed to create category");
    }
  }

  static async updateCategory(id: number, title: string) {
    const response = await axiosInstance.put(`/categories/${id}`, { title });
    if (response.status === 200) {
      return response.data.category;
    } else {
      throw new Error("Failed to update category");
    }
  }

  static async deleteCategory(id: number): Promise<void> {
    const response = await axiosInstance.delete(`/categories/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to delete category");
    }
  }
}
