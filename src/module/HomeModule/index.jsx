import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomeModule() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("articles") || "[]");
    setArticles(stored);
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Вы уверены, что хотите удалить статью?");
    if (!confirm) return;

    const updated = articles.filter(article => article.id !== id);
    setArticles(updated);
    localStorage.setItem("articles", JSON.stringify(updated));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">📚 Список статей</h1>
      {articles.length === 0 ? (
        <p className="text-muted">Пока нет статей.</p>
      ) : (
        <div className="list-group">
          {articles.map(article => (
            <div
              key={article.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <Link to={`/article/${article.id}`} className="fw-bold text-decoration-none">
                  {article.title}
                </Link>
              </div>
              <button
                className="btn btn-sm btn-outline-danger mb-4"
                onClick={() => handleDelete(article.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}