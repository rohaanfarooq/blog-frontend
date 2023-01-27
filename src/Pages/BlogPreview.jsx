import React, { useEffect, useState } from "react";
import "../CSS/BlogDetails.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation, useParams } from "react-router-dom";
import axios from "../axios";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
function BlogDetails(props) {
  // const [blog, setBlog] = useState();
  const mode = localStorage.getItem("thememode");
  const { state } = useLocation();
  const blog = state;
  const name = localStorage.getItem("username");

  return (
    <div className="blog-details">
      <Navbar />
      <div className="blog-details-content">
        <div className="details-header">
          <h3 className="details-tag">{blog.category}</h3>
          <h2
            className={
              mode === "dark" ? "details-title dark-title" : "details-title"
            }
          >
            {blog.title}
          </h2>
          <p className="details-creation">
            By{" "}
            <span className={mode === "dark" ? "dark-span" : ""}>{name}</span> -{" "}
            {blog.date}
          </p>
        </div>
        <div className="details-img-container">
          <img src={blog.imageUrl} alt="" />
        </div>
        <div
          className={
            mode === "dark" ? "details-content dark-content" : "details-content"
          }
        >
          <p>{blog.desc}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetails;
