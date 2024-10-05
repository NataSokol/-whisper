import { axiosInstance } from "@/shared/lib/axiosInstance";
import { SubcategoryCreate, SubcategoryListResponce, SubcategoryResponce } from "../model";

export class SubcategoryService {
  static async getAllSubcategories() {
    const response = await axiosInstance.get<SubcategoryListResponce>(
      "/subcategories"
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }
  static async deleteSubcategory(id: number) {
    const response = await axiosInstance.delete<SubcategoryResponce>(`/subcategories/${id}`);

    if (response.status === 200) {  
    return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  static async createSubcategory( data: SubcategoryCreate) {
    const response = await axiosInstance.post<SubcategoryResponce>(`/subcategories/`, data);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  static async updateSubcategory(id: number, data: SubcategoryCreate) {
    const response = await axiosInstance.put<SubcategoryResponce>(`/subcategories/${id}`, data);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }
}


