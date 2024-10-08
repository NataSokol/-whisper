export type Category = {
  id: number;
  title: string;
};

export type CategoryList = Category[];

// RESPONSE

export type CategoryResponse = {
  categories: CategoryList;
  message: string;
}

export type OneCategoryResponse = {
  category: Category;
  message: string;
}