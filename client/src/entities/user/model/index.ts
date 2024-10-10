import { Cart } from "@/entities/cart";

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