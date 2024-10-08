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
};

export type UserInfoResponse = {
  user: User;
  // message: string;
};
