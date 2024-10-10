import React, { useState } from "react";
// import styles from './SignInForm.module.css';
import "./customInputStyles.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import {
  selectUserLoading,
  useAppDispatch,
  useAppSelector,
} from "@/shared/hooks/reduxHooks";
import { signIn } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";

export const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loading = useAppSelector(selectUserLoading);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(signIn({ email, password }));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            className="custom-input"
          />
          <div className="floating-label">Email:</div>
        </div>
        <div className="input-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            className="custom-input"
          />
          <div className="floating-label">Password:</div>
        </div>
        <Button theme={ThemeButton.DARK} type="submit" disabled={loading} className="submit-button">
          {loading ? "ВОЙТИ..." : "ВОЙТИ"}
        </Button>
      </div>
    </form>
  );
};
