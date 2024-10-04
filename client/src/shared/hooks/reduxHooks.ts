import { AppDispatch, RootState } from '@/app/store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

//FIX - Зачем это нужно?
//? Определение кастомных хуков useAppDispatch и useAppSelector позволяет вам использовать Redux с полной поддержкой типизации в TypeScript, не типизируя каждый раз возвращаемое значение из хранилища и функции-диспетчеры

//? Типизированный useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

//? Типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//? Хук для быстрой выдачи загрузки юзера
export const selectUserLoading = (state: RootState) => state.user.loading;