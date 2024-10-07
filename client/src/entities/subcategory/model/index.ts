export type Subcategory = {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export type SubcategoryList = Subcategory[];

export type SubcategoryCreate = Omit<
  Subcategory,
  "id" | "createdAt" | "updatedAt"
>;

export type SubcategoryResponse = {
  message: string;
  subcategory: Subcategory;
};

export type SubcategoryListResponse = {
  message: string;
  subcategories: SubcategoryList;
};
