import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";

const ResetPassword: React.FC = () => {
  const { token } = useParams<string>();
  const [newPassword, setNewPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(token);
      console.log(newPassword);

      const response = await axios.post(
        "http://localhost:3000/api/auth/change-password",
        {
          token,
          newPassword,
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h2>Сброс пароля</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Введите новый пароль"
            required
          />
          <Button theme={ThemeButton.DARK} type="submit">Изменить пароль</Button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
