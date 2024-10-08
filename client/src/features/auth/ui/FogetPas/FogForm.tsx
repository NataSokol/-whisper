import React, { useState } from "react";
import "../SignInForm/customInputStyles.css";
import axios from "axios";

export const FogForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/send-letter",
        { email }
      );

      if (response.status === 200) {
        setIsSuccessMessageVisible(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      {isSuccessMessageVisible ? ( // Условный рендеринг
        <p className="success-message">
          На вашу почту отправлена ссылка для изменения пароля
        </p>
      ) : (
        <>
          <h2>Восстановление пароля</h2>
          <p>
            Укажите адрес почты, мы вышлем письмо с инструкцией по
            восстановлению пароля.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                className="custom-input"
                required
              />
              <div className="floating-label">Введите ваш email</div>
            </div>
            <button type="submit" className="submit-button">
              ВОССТАНОВИТЬ
            </button>
          </form>
        </>
      )}
    </div>
  );
};
