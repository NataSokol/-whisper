import React, { useState } from "react";
import axios from "axios";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(111);
    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        email,
        password,
      });
      console.log(response);

      alert("Registration successful! Please check your email.");
    } catch (error) {
      alert("Registration failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
