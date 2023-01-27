import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./Store";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import BlogDetails from "./Pages/BlogDetails";
import BlogPreview from "./Pages/BlogPreview";
import MyBlogs from "./Pages/MyBlogs";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NewBlog from "./Pages/NewBlog";
import UpdateBlog from "./Pages/UpdateBlog";

function App() {
  const mode = useSelector((state) => state.mode);
  // const mode = localStorage.getItem("thememode");

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log("login: ", isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);

  return (
    <div className={mode == "dark" ? "app dark-app" : "app light-app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/preview" element={<BlogPreview />} />
          {!isLoggedIn ? (
            <>
              <Route path="/my-blogs" element={<Blogs />} />
              <Route path="/new-blog" element={<Blogs />} />
            </>
          ) : (
            <>
              <Route path="/my-blogs" element={<MyBlogs />} />
              <Route path="/new-blog" element={<NewBlog />} />
            </>
          )}
          <Route path="/update/blog/:id" element={<UpdateBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
