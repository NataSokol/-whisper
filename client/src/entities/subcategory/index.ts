import subCategoryReducer from "./model/subcategorySlice";

export { SubcategoryService } from "./api";
export type { Subcategory, SubcategoryList } from "./model";
export {
  getAllSubcategories,
  createSubcategory,
  deleteSubcategory,
  updateSubcategory,
} from "./model/subcategoryThunk";
export { AdminSubCategoryItem } from "./ui/AdminSubCategoryItem";

export { subCategoryReducer };