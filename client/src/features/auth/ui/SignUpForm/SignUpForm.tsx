import React, { useState } from "react";
import "../SignInForm/customInputStyles.css";

import { ROUTES } from "@/app/router/routes";
import { useNavigate } from "react-router-dom";
import {
  selectUserLoading,
  useAppDispatch,
  useAppSelector,
} from "@/shared/hooks/reduxHooks";
import { signUp } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";

import { checkEmailExists } from "@/shared/utils/checkEmailExists";

import Button, { ThemeButton } from "@/shared/ui/Button/Button";

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectUserLoading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const validatePassword = (password: string): string[] => {
    const errors: string[] = [];
    if (password.length < 6) {
      errors.push("Пароль должен содержать минимум 6 символов.");
    }
    if (/\s/.test(password)) {
      errors.push("Пароль не должен содержать пробелы.");
    }
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrors([]);
    const passwordErrors = validatePassword(password);

    if (passwordErrors.length > 0) {
      setErrors(passwordErrors);
      return;
    }

    if (password === email) {
      setErrors((prev) => [
        ...prev,
        "Пароль не должен совпадать с адресом электронной почты.",
      ]);
      return;
    }

    try {
      // const isTrueEmail = await checkEmailExists(email); // Проверка существования email
      // if (isTrueEmail) {
      //   setErrors((prev) => [
      //     ...prev,
      //     "Этот адрес электронной почты уже зарегистрирован.",
      //   ]);
      //   return;
      // }

      const resultAction = await dispatch(signUp({ email, password }));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error);

      if (typeof error === "string") {
        setErrors((prev) => [...prev, error]);
      } else if (error instanceof Error && error.message) {
        setErrors((prev) => [
          ...prev,
          error.message ||
            "Произошла ошибка при регистрации. Пожалуйста, попробуйте ещё раз.",
        ]);
      } else {
        setErrors((prev) => [
          ...prev,
          "Произошла ошибка при регистрации. Пожалуйста, попробуйте ещё раз.",
        ]);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="input-group">
          <input
            className="input-group2 custom-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
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
          <div
            className={`error-messages ${errors.length > 0 ? "active" : ""}`}
          >
            {errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          </div>
        </div>

        <Button
          theme={ThemeButton.DARK}
          type="submit"
          disabled={loading}
          className="submit-button"
        >
          {loading ? "ЗАРЕГИСТРИРОВАТЬСЯ..." : "ЗАРЕГИСТРИРОВАТЬСЯ"}
        </Button>
      </div>
    </form>
  );
};
