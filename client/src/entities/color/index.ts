import colorReducer from "./model/colorSlice";

export { ColorServices } from "./api";
export type {
  Color,
  ColorList,
  ColorResponse,
  OneColorResponse,
} from "./model";
export { createColor, getAllColors, updateColor } from "./model/colorThunk";
export { ColorItem } from "./ui/ColorItem";

export { colorReducer };
