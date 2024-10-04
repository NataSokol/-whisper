export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
//   categoryId: number;
//   collectionId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductList = Product[];

// RESPONSE

export type ProductResponse = {
  products: ProductList;
  message: string;
};

export type OneProductResponse = {
  product: Product;
  message: string;
};
