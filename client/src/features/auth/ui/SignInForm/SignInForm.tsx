import React, { useState } from "react";
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
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const loading = useAppSelector(selectUserLoading);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); 
    try {
      const resultAction = await dispatch(signIn({ email, password }));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      setError(error.message || "Неизвестная ошибка при входе.");
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
        <label className="floating-label">Email:</label>
      </div>
      <div className="input-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" "
          className="custom-input"
        />
        <label className="floating-label">Password:</label>
        <div className="error-messages">
          {error && (
            <p className="error-message">{error}</p>
          )}
        </div>
      </div>
    
      <Button theme={ThemeButton.DARK} type="submit" disabled={loading} className="submit-button">
          {loading ? "ВОЙТИ..." : "ВОЙТИ"}
        </Button>
    </div>
  </form>
);
};