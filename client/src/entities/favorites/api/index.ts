import { axiosInstance } from "@/shared/lib/axiosInstance";
import { FavoritesList } from "../model";

export class FavoritesService {
  static async createFavorite(productId: number) {
    const response = await axiosInstance.post(`/favorites`, {
      productId,
    });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Failed to create favorite");
    }
  }

  static async deleteFavorite(productId: number) {
    const response = await axiosInstance.delete(`/favorites/${productId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to delete favorite");
    }
  }

  static async getFavorites(): Promise<FavoritesList> {
    const response = await axiosInstance.get(`/favorites`);
    if (response.status === 200) {
      return response.data.favorites; 
    } else {
      throw new Error("Failed to fetch favorites");
    }
  }
}
