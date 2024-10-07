import { Category } from "@/entities/category";
import { Collection } from "@/entities/collection";
import { Subcategory } from "@/entities/subcategory/model";

export type Product = {
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

  Collection: Collection
  Category: Category;
  Subcategory: Subcategory;

  createdAt: Date;
  updatedAt: Date;
};

export type ProductList = Product[];

// RESPONSE

export type ProductListResponse = {
  products: ProductList;
  message: string;
};

export type ProductResponse = {
  product: Product;
  message: string;
};
