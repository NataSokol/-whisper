// import styles from "./SignUpForm.module.css";
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
import { message } from "antd";
import { checkEmailExists } from "@/shared/utils/checkEmailExists";

// /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectUserLoading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const resultAction = await dispatch(signUp({ email, password }));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error);
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
        </div>

        <button type="submit" disabled={loading} className="submit-button">
          {loading ? "ЗАРЕГИСТРИРОВАТЬСЯ..." : "ЗАРЕГИСТРИРОВАТЬСЯ"}
        </button>
      </div>
    </form>
  );
};
