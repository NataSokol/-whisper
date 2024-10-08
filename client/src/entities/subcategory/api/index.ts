import { axiosInstance } from "@/shared/lib/axiosInstance";
import {
  SubcategoryCreate,
  SubcategoryListResponse,
  SubcategoryResponse,
} from "../model";

export class SubcategoryService {
  static async getAllSubcategories() {
    const response = await axiosInstance.get<SubcategoryListResponse>(
      "/subcategories"
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }
  static async deleteSubcategory(id: number) {
    const response = await axiosInstance.delete<SubcategoryResponse>(
      `/subcategories/${id}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  static async createSubcategory(data: SubcategoryCreate) {
    const response = await axiosInstance.post<SubcategoryResponse>(
      `/subcategories/`,
      data
    );
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  static async updateSubcategory(id: number, data: SubcategoryCreate) {
    const response = await axiosInstance.put<SubcategoryResponse>(
      `/subcategories/${id}`,
      data
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }
}