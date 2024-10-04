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

  static async createCollection(data: CollectionCreate) {
    const response = await axiosInstance.post<CollectionResponse>(
      `/collections/`,
      data
    );
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  static async updateCollection(id: number, data: CollectionCreate) {
    const response = await axiosInstance.put<CollectionResponse>(
      `/collections/${id}`,
      data
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }
}
