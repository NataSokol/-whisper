import favoritesReducer from "./model/favoritesSlice";

export { FavoritesService } from "./api";
export type { Favorites, FavoritesList } from "./model";
export { fetchFavorites } from "./model/favoritesThunk";

export { favoritesReducer };
