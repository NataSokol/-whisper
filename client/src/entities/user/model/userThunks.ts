//? функция из Redux Toolkit для создания асинхронных действий.
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios'; //? Типизация ошибок
import { AuthResponse } from '.'; //? Типизация ответа сервера
import { UserService } from '../api'; //? класс сервиса с запросами на бэк

//FIX - Что такое санка?
//? createAsyncThunk — это функция, которая связывает действия (action) и редактор состояния (reducer) в Redux, позволяя работать с асинхронным кодом. То есть это функция, которая оборачивает другую функции и позволяет делать асинхронные действия (например, вызовы API) перед тем, как передать данные в хранилище Redux.

//FIX - Зачем нужна санка?
//? В Redux, по умолчанию, редукторы должны быть чистыми функциями и синхронными, то есть они не могут напрямую обрабатывать асинхронный код (например, задержки, запросы к серверу). createAsyncThunk позволяет обойти это ограничение, предоставляя способ запускать асинхронные операции и затем диспетчировать действия на основе их результатов.

//FIX - Как создать санку?
//! Создание санки: `createAsyncThunk` принимает два параметра: строку с названием действия (в уникальном формате 'сущность/действие') и асинхронную функцию.

//? - user/refreshAccessToken – название действия.
//? - асинхронная функция: запрос к API для обновления токена:

//? Типизация возвращаемой ошибки из санки
type RejectValue = {
  message: string;
};

export const refreshAccessToken = createAsyncThunk<
  AuthResponse,
  void,
  { rejectValue: RejectValue }
>('user/refreshAccessToken', async (_, { rejectWithValue }) => {
  //? - _ - первый обязательный аргумент, если мы хотим работать с rejectWithValue, как правило, это параметры функции
  try {
    return await UserService.refreshAccessToken(); //* - стучимся на бэк, получаем данные юзера (токен запишем в instance в методе класса UserService)
  } catch (error) {
    const err = error as AxiosError<{ message: string }>; //? Приведение типа: Чтобы предоставить более конкретное представление о типе ошибки, используется приведение типа: `error as AxiosError<{ message: string }>`:
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const signIn = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: RejectValue }
>('user/signIn', async ({ email, password }, { rejectWithValue }) => {
  try {
    return await UserService.signIn(email, password);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const signUp = createAsyncThunk<
  AuthResponse,
  { username: string; email: string; password: string },
  { rejectValue: RejectValue }
>('user/signUp', async ({ username, email, password }, { rejectWithValue }) => {
  try {
    return await UserService.signUp(username, email, password);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: RejectValue }
>('user/logout', async (_, { rejectWithValue }) => {
  try {
    await UserService.logout();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});