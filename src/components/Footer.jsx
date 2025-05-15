export default function Footer() {
  return (
    <footer
      className="bg-dark text-white text-center"
      style={{
        display: "flex",
        bottom: 0,
        width: "100%",
        height: "65px",
        lineHeight: "60px",
        borderTop: "1px solid #444",
      }}
    >
      <div className="container">
        <span>© {new Date().getFullYear()} Мои статьи. Все права защищены.</span>
      </div>
    </footer>
  );
}