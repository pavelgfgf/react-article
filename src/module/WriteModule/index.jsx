import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function WriteModule() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: uuidv4(),
      title,
      content,
      image,
    };

    const stored = JSON.parse(localStorage.getItem("articles") || "[]");
    stored.push(newArticle);
    localStorage.setItem("articles", JSON.stringify(stored));

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Написать статью</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Заголовок</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Текст статьи</label>
          <textarea
            className="form-control"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Изображение (необязательно)</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageUpload}
          />
        </div>
        {image && (
          <div className="mb-3">
            <img src={image} alt="Preview" className="img-fluid rounded" />
          </div>
        )}
        <button type="submit" className="btn btn-success">
          Опубликовать
        </button>
      </form>
    </div>
  );
}

export default WriteModule;