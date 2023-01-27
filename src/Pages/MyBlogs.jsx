import React, { useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MyBlogsSkeleton from "../Components/MyBlogsSkeleton";
import ColumnCard from "../Components/ColumnCard";
import "../CSS/MyBlogs.css";

function MyBlogs(props) {
  const [user, setUser] = useState([]);
  const userid = localStorage.getItem("userId");
  const mode = localStorage.getItem("mode");
  useEffect(() => {
    async function fetchBlogsByUserId() {
      const req = await axios.get(`/api/blog/user/${userid}`);
      setUser(req.data.user);
    }
    fetchBlogsByUserId();
  }, []);
  console.log(user);

  return (
    <div className="my-blogs">
      <Navbar />
      {user.length == 0 ? (
        <MyBlogsSkeleton />
      ) : (
        <div className="my-blogs-content">
          {user && user.blogs && user.blogs.length === 0 && (
            <>
              <h2 style={{ color: mode === "dark" ? "#cacaca" : "" }}>
                You Do not have any blogs yet!
              </h2>
              <Link to={"/new-blog"} className="create-now-btn">
                Create one now
              </Link>
            </>
          )}

          {user &&
            user.blogs &&
            user.blogs.map((blog) => (
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
                  date={blog.date}
                  width={"100%"}
                  id={blog._id}
                  myblogs={true}
                />
              </div>
            ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

{
  /* <BlogCard
                key={index}
                blogId={blog._id}
                isUser={true}
                title={blog.title}
                desc={blog.description}
                imageUrl={blog.image}
                userName={user.name}
              /> */
}

export default MyBlogs;
