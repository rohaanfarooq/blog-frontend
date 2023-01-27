import React, { useEffect, useState } from "react";
import "../CSS/BlogDetails.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
function BlogDetails(props) {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  // const mode = localStorage.getItem("thememode");
  const mode = localStorage.getItem("thememode");
  useEffect(() => {
    async function fetchBlogById() {
      const req = await axios.get(`/api/blog/${id}`);
      setBlog(req.data.blog);
    }
    fetchBlogById();
  }, []);
  console.log("blog = ", blog);
  const skeletonBackground = {
    backgroundColor: mode == "dark" ? "#444" : "",
  };
  return (
    <div className="blog-details">
      <Navbar />
      <div className="blog-details-content">
        {blog.length == 0 ? (
          <div className="skeleton-container">
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={50}
                height={20}
                style={skeletonBackground}
              />
              <Skeleton
                variant="text"
                width={250}
                height={35}
                style={skeletonBackground}
              />
              <Skeleton
                variant="text"
                width={250}
                height={15}
                style={skeletonBackground}
              />
              <Skeleton
                variant="rectangular"
                width={"85vw"}
                height={"90vh"}
                style={skeletonBackground}
              />
              <Skeleton
                variant="text"
                width={250}
                height={35}
                style={skeletonBackground}
              />
            </Stack>
          </div>
        ) : (
          <>
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
                <span className={mode === "dark" ? "dark-span" : ""}>
                  {blog.user.name}
                </span>{" "}
                - {blog.date}
              </p>
            </div>
            <div className="details-img-container">
              <img src={blog.image} alt="" />
            </div>
            <div
              className={
                mode === "dark"
                  ? "details-content dark-content"
                  : "details-content"
              }
            >
              <p>{blog.description}</p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetails;
