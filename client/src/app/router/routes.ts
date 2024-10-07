export enum ROUTES {
  HOME = "/",

  ADMIN = "/admin",
  ADMIN_CATEGORIES = "/admin/categories",
  ADMIN_COLLECTIONS = "/admin/collections",
  ADMIN_SUBCATEGORY = "/admin/subcategories",
  ADMIN_PRODUCTS = "/admin/products",
  ADMIN_PRODUCT = "/admin/products/:id",
  SIGNIN = "/signin",
  SIGNUP = "/signup",
  CHECKEMAIL = "/checkemail",
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
  TG = "https://t.me/shepothome",
  VK = "https://vk.com/shepot.home",
  ERROR = "*",
}

export function getCollectionRoute(id: number): string {
  return `/collection/${id}`;
}
