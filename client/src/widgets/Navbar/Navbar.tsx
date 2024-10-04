import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ROUTES } from '@/app/router/routes';
import { logout, UserCard } from '@/entities/user';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import Loader from '@/shared/ui/Loader/Loader';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';

export const Navbar: React.FC = () => {
  const { user, loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Button theme={ThemeButton.PRIMARY}>
        <Link to={ROUTES.HOME}>Home</Link>
      </Button>
      <Button theme={ThemeButton.PRIMARY}>
        <Link to={ROUTES.TASKS}>Tasks</Link>
      </Button>

      {user ? (
        <>
          <UserCard user={user} />
          <Button theme={ThemeButton.DANGER} onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button theme={ThemeButton.PRIMARY}>
            <Link to={ROUTES.SIGNIN}>Sign In</Link>
          </Button>

          <Button theme={ThemeButton.PRIMARY}>
            <Link to={ROUTES.SIGNUP}>Sign Up</Link>
          </Button>
        </>
      )}
    </div>
  );
};