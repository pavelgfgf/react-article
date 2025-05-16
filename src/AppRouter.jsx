import { Route, Router, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WritePage from "./pages/WritePage";
import ArticlePage from "./pages/ArticlePage";
import Login from "./api/auth/login";
import Register from "./api/auth/register";


const AppRouter = () => {
  return (
    <>
    <Navbar />
    <Footer/>
      <div className="p-4 max-w-3xl mx-auto mb-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/write" element={<WritePage/>} />
          <Route path="/article/:id" element={<ArticlePage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
      
  );
};

export default AppRouter;
