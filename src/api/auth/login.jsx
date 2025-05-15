import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form);
    if (success) navigate("/");
    else setError("Неверный логин или пароль");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Логин</label>
          <input
            type="text"
            className="form-control"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Пароль</label>
          <input
            type="password"
            className="form-control"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
    </div>
  );
}