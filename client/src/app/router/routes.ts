export enum ROUTES {
  HOME = "/",
  FAVORITES = "/favorites",
  PROFILE = "/profile",
  CATALOG = "/catalog",
  AUTH = "/auth",
  CART = "/cart",
  ERROR = "*",
}

export function getCollectionRoute(id: number): string {
  return `/collection/${id}`;
}
