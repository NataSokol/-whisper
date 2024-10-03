export enum ROUTES {
  HOME = "/",
  FAVORITES = "/favorites",
  PROFILE = "/profile",
  CATALOG = "/catalog",
  AUTH = "/auth",
  CART = "/cart",
  DELPAY = "/delivery-pay",
  REFUND = "/refund",
  QUESTANSW = "/question-answer",
  GIFTCARD = "/gift-card",
  LOYALTY = "/loyalty",
  ABOUT = "/about",
  CONTACTS = "/contacts",
  FEEDBACK = "/feedback",
  POLICY = "/policy",
  OFERTA = "/oferta",
  TG = 'https://t.me/shepothome',
  VK = 'https://vk.com/shepot.home',
  ERROR = "*",
}

export function getCollectionRoute(id: number): string {
  return `/collection/${id}`;
}
