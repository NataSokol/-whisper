import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface MatchParams {
  token: string;
}

const ResetPassword: React.FC = () => {
 
  const { token } = useParams<MatchParams>();
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
      alert(
        "Ошибка: " + (error.response?.data?.message || "Неизвестная ошибка")
      );
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
      <button type="submit">Изменить пароль</button>
    </form>
    
    </div>
    </>
  );
};

export default ResetPassword;
