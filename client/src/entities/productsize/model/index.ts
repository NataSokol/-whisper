export type ProductSize = {
  id: number;
  productId: number;
  sizeTitle: string;
  length: number;
  width: number;
  chestGirth: number;
  waistGirth: number;
  hipGirth: number;
  chestUnderGirth: number;
  frontLength: number;
  externalSeamLength: number;
  innerSeamLength: number;
  sleeveLength: number;
  quantity: number;
  createdAt: Date; 
  updatedAt: Date; 
};

export type ProductSizeList = ProductSize[];

export type ProductSizeResponse = {
  productSize: ProductSize;
  message: string;
};

export type ProductSizeListResponse = {
  productSizes: ProductSizeList;
  message: string;
};

export type BaseResponse<T> = {
  data: T;
  message: string;
};
