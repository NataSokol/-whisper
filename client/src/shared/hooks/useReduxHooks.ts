import { AppDispatch, RootState } from "@/app/store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

//? Типизированный useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

//? Типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//? Хук для быстрой выдачи загрузки юзера
// export const selectUserLoading = (state: RootState) => state.user.loading;
