import React, { useState } from 'react';
// import styles from './SignInForm.module.css';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/app/router/routes';
import {
  selectUserLoading,
  useAppDispatch,
  useAppSelector,
} from '@/shared/hooks/reduxHooks';
import { signIn } from '@/entities/user';
import { unwrapResult } from '@reduxjs/toolkit';

export const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const loading = useAppSelector(selectUserLoading);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(signIn({ email, password }));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type='submit' disabled={loading}>
        {loading ? 'Signing In...' : 'Sign in'}
      </button>
    </form>
  );
};