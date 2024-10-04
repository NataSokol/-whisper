import { createSlice } from '@reduxjs/toolkit';
import { User } from '.';
import { refreshAccessToken, signIn, signUp, logout } from './userThunks';
import { message } from 'antd';

//FIX Что такое слайс?
//? Слайс в Redux Toolkit — это объект, который объединяет состояние, редукторы и действия, относящиеся к одной функциональной области приложения (например, юзеры).

//? Определение типа состояния юзера:
type UserState = {
  user: User | null;
  error: string | null;
  loading: boolean;
};

//? Инициализация начального состояния юзера:
const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user', //? Строка, определяющая имя слайса
  initialState, //? Начальное состояние для данной части состояния Redux
  reducers: {}, //?  reducers - объект, содержащий ТОЛЬКО синхронные функции-редукторы для обновления состояния

  //? extraReducers -  Объект или функция, используемая для обработки асинхронных действий

  //? builder: это параметр функции extraReducers. Он используется для настройки реакций на асинхронные действия. Builder позволяет добавить обработчики для различных состояний асинхронного действия.

  //? addCase: метод builder'а, который добавляет обработчик для конкретного действия. Он принимает два аргумента:
  //?   1. Тип действия (например, `fetchUser.fulfilled`).
  //?   2. Функцию редуктора, которая обновляет состояние на основе действия.

  //* fulfilled: состояние успешно завершенного асинхронного действия. Обрабатывает успешное выполнение санки, обновляя состояние на основании полученных данных.
  //! rejected: состояние неудачно завершенного асинхронного действия. Обрабатывает ошибку, возникшую при выполнении санки, обновляя состояние на основании ошибки.
  //? pending: состояние текущего асинхронного действия. Используется для сохранения статуса загрузки данных

  extraReducers: (builder) => {
    builder
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(refreshAccessToken.rejected, (state) => {
        state.loading = false;
      })
      //!----------------------------------------------------------------
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to sign in';
        message.warning(action.payload?.message || 'Failed to sign in');
      })

      //!----------------------------------------------------------------
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to sign up';
        message.error(action.payload?.message || 'Failed to sign up');
      })

      //!----------------------------------------------------------------
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to logout';
        message.error(action.payload?.message || 'Failed to logout');
      });
  },
});

export default userSlice.reducer;