import styles from './SignUpForm.module.css';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ROUTES } from '@/app/router/routes';
import { useNavigate } from 'react-router-dom';
import {
  selectUserLoading,
  useAppDispatch,
  useAppSelector,
} from '@/shared/hooks/reduxHooks';
import { signUp } from '@/entities/user';
import { unwrapResult } from '@reduxjs/toolkit';

// /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

interface IFormInputs {
  username: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    username: yup.string().required('Username is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  })
  .required();

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectUserLoading);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInputs> = async ({
    username,
    email,
    password,
  }) => {
    try {
      const resultAction = await dispatch(
        signUp({ username, email, password })
      );
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusIcon = (fieldName: keyof IFormInputs) => {
    if (errors[fieldName]) {
      return <span className={styles.icon}>🔴</span>;
    }
    if (getValues()[fieldName] && !errors[fieldName]) {
      return <span className={styles.icon}>✅</span>;
    }
    return null;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>* username</label>
        <div className={styles.inputWithIcon}>
          <input
            className={styles.input}
            placeholder='Enter your username'
            {...register('username')}
          />
          {getStatusIcon('username')}
        </div>
        {errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>* email</label>
        <div className={styles.inputWithIcon}>
          <input
            className={styles.input}
            placeholder='Enter your email'
            {...register('email')}
          />
          {getStatusIcon('email')}
        </div>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>* password</label>
        <div className={styles.inputWithIcon}>
          <input
            className={styles.input}
            placeholder='Enter your password'
            type='password'
            {...register('password')}
          />
          {getStatusIcon('password')}
        </div>
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <button
        className={styles.button}
        type='submit'
        disabled={!isValid || loading}
      >
        {loading ? 'Signing Up...' : 'Sign up'}
      </button>
    </form>
  );
};