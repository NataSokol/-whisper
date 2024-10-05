import subCategoryReducer from "./model/subcategorySlice";

export { SubcategoryService } from "./api";
export type { Subcategory, SubcategoryList } from "./model";
export { getAllSubcategories } from "./model/subcategoryThunk";

export { subCategoryReducer };
