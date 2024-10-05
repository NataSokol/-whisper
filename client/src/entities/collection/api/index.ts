import { axiosInstance } from "@/shared/lib/axiosInstance";
import {
  CollectionCreate,
  CollectionListResponse,
  CollectionResponse,
} from "../model";

export class CollectionService {
  static async getAllCollections() {
    const response = await axiosInstance.get<CollectionListResponse>(
      "/collections"
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }
  static async deleteCollection(id: number): Promise<void> {
    const response = await axiosInstance.delete(`/collections/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  static async createCollection(title: string, image: File) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    const response = await axiosInstance.post<CollectionResponse>(
      `/collections/`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  static async updateCollection(id: number, title: string, image?: File) {
    const formData = new FormData();
    if (title) {
      formData.append("title", title);
    }
    if (image) {
      formData.append("image", image);
    }

    console.log(formData);
    const response = await axiosInstance.put<CollectionResponse>(
      `/collections/${id}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }
}
