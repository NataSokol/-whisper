export type Color = {
  id: number;
  title: string;
  colorCode: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ColorList = Color[];

export type CreateColorRequest = {
  title: string;
  colorCode: string;
  productId: number
};

//!!! RESPONSE

export type ColorResponse = {
  colors: ColorList;
  message: string;
};

export type OneColorResponse = {
  color: Color;
  message: string;
};

//!!! RESPONSE AND ERROR
export type CreateColorResponse = {
  colors: Color[];
  message: string;
};
