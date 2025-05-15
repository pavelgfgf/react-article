import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ArticleModule() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("articles") || "[]");
    const found = stored.find((a) => a.id === id);
    setArticle(found);
  }, [id]);

  if (!article) {
    return <p className="text-muted">Статья не найдена</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{article.title}</h2>
      {article.image && (
        <img
          src={article.image}
          alt="article"
          className="img-fluid mb-4 rounded"
        />
      )}
      <p style={{ whiteSpace: "pre-line" }}>{article.content}</p>
    </div>
  );
}

export default ArticleModule;