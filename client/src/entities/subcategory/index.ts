export { SubcategoryService } from "./api";
export type { Subcategory, SubcategoryList } from "./model";
import subcategoryReducer from "./model/subcategorySlice";

export { getAllSubcategories , createSubcategory, updateSubcategory, deleteSubcategory} from "./model/subcategoryThunck";


export {subcategoryReducer}