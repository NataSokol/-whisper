import { Category } from "@/entities/category";
import { Collection } from "@/entities/collection";
import { ColorList } from "@/entities/color/model";
import { ImageList } from "@/entities/image";
import { ProductSizeList } from "@/entities/productsize";
import { Subcategory } from "@/entities/subcategory/model";

export type ProductDetails = {
  id: number;
  title: string;
  description: string;
  composition: string;
  price: number;
  salePrice: number;
  image: string;
  
  categoryId: number;
  collectionId: number;
  subcategoryId: number;
};

export type Product = ProductDetails & {
  Collection: Collection;
  Category: Category;
  Subcategory: Subcategory;

  Colors: ColorList;
  Images: ImageList;
  ProductSizes: ProductSizeList;

  createdAt: Date;
  updatedAt: Date;
};

export type ProductList = Product[];

export type CreateProductRequest = {
  title: string;
  images: File[];
  description: string;
  composition: string;
  price: number;
  collectionId: number;
  categoryId: number;
  subcategoryId: number;
};

//! RESPONSE
export type ProductResponse = {
  products: ProductList;
  message: string;
};

export type OneProductResponse = {
  product: Product;
  message: string;
};
