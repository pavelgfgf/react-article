import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find(u => u.email === email)) {
      return alert("Пользователь уже существует");
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Успешная регистрация!");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Пароль</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary">Зарегистрироваться</button>
      </form>
    </div>
  );
}
