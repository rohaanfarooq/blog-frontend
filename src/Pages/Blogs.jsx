import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MyBlogsSkeleton from "../Components/MyBlogsSkeleton";

import axios from "../axios";
import { useEffect } from "react";
import ColumnCard from "../Components/ColumnCard";
import "../CSS/Blogs.css";

function Blogs(props) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const req = await axios.get(`/api/blog`);
      setBlogs(req.data.blogs);
    }
    fetchBlogs();
  }, []);
  console.log(blogs);

  return (
    <div className="blogs">
      <Navbar />
      {blogs.length == 0 ? (
        <MyBlogsSkeleton />
      ) : (
        <div
          className="blogs-content"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {blogs.map((blog) => (
            <div
              style={{
                width: "400px",
                textDecoration: "none",
                margin: "1.25rem 0",
              }}
            >
              <ColumnCard
                key={blog._id}
                imageUrl={blog.image}
                title={blog.title}
                date={"Jan 14, 2021"}
                width={"100%"}
                id={blog._id}
              />
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Blogs;
