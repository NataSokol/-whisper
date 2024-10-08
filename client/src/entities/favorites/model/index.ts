import { Product } from "@/entities/product";

export type Favorites = {
  id: number;
  userId: number;
  productId: number;
  createdAt: Date;
  updatedAt: Date;
  Product: Product;
};

export type FavoritesResponse = {
  message: string;
  newFavorite: Favorites;
};

export type FavoritesList = Favorites[];
