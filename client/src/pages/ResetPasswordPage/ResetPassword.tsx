import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";

const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [newPassword, setNewPassword] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [isPasswordChanged, setIsPasswordChanged] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const navigate = useNavigate();

  const validatePassword = (password: string): string[] => {
    const errors: string[] = [];
    
    if (password.length < 6) {
      errors.push("Пароль должен содержать минимум 6 символов.");
    }
    if (/\s/.test(password)) {
      errors.push("Пароль не должен содержать пробелов.");
    }
    if (password.includes(window.location.hostname)) {
      errors.push("Пароль не должен совпадать с адресом сайта.");
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validatePassword(newPassword);

    if (validationErrors.length > 0) {
      setErrorMessages(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/change-password",
        {
          token,
          newPassword,
        }
      );

      if (response.status === 200) {
        setMessage("Пароль изменен успешно!");
        setIsPasswordChanged(true);
        setErrorMessages([]);
      } else {
        throw new Error("Что-то пошло не так.");
      }
    } catch (error: any) {
      console.log(error);
      setMessage("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
      if (error.response && error.response.data.errors) {
        setErrorMessages(error.response.data.errors);
      }
    }
  };

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className={styles.resetPasswordContainer}>
      {isPasswordChanged ? (
        <div>
          <h2 className={styles.resetPassworh2}>{message}</h2>
          <button
            className={styles.resetPasswordForm2}
            onClick={handleRedirect}
          >
            Перейти к покупкам
          </button>
        </div>
      ) : (
        <form className={styles.resetPasswordForm} onSubmit={handleSubmit}>
          <h2>Сменить пароль</h2>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setErrorMessages([]);
            }}
            placeholder="Введите новый пароль"
            required
          />
          {errorMessages.length > 0 && (
            <div className={styles.errorMessages}>
              {errorMessages.map((error, index) => (
                <p
                  key={index}
                  style={{ color: "red", fontSize: "12px", margin: "0" }}
                >
                  {error}
                </p>
              ))}
            </div>
          )}
          <button type="submit">Изменить</button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
