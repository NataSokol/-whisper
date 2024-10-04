import React from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { ROUTES } from '@/app/router/routes';
import { useAppSelector } from '@/shared/hooks/reduxHooks';

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { user, loading } = useAppSelector((state) => state.user);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to={ROUTES.SIGNIN} />;
  }

  return children;
};