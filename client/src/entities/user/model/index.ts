import { Cart } from "@/entities/cart";
import { ProductList } from "@/entities/product";


export type User = {
  id: number ;
  phone: string;
  email: string;
  name: string;
  surname: string;
  birthday: Date;
  address: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
  LikedProducts: ProductList;
};

export type AuthResponse = {
  accessToken: string;
  user: User;
  cart: Cart | null
};

export type UserInfoResponse = {
  user: User;
  // message: string;
};

export type InfoUser = {
  email: string;
  phone: string;
  name: string;
  surname: string;
  birthday: string;
  address: string;
}