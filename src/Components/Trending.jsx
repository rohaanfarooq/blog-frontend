import { Skeleton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../CSS/Trending.css";
import ColumnCard from "./ColumnCard";
import Listings from "./Listings";
function Trending(props) {
  const [trendingBlogs, setTrendingBlogs] = useState([]);
  const mode = localStorage.getItem("thememode");
  useEffect(() => {
    async function fetchTrendingBlogs() {
      const res = await axios.get("/api/blog/get/trending");
      setTrendingBlogs(res.data.trending);
    }
    fetchTrendingBlogs();
  }, []);
  const skeletonBackground = {
    backgroundColor: mode == "dark" ? "#444" : "",
    margin: "1rem",
  };
  if (trendingBlogs.length == 0) {
    return (
      <div className="trending-skeletons">
        <Stack spacing={1}>
          <Skeleton
            variant="text"
            width={100}
            height={40}
            style={skeletonBackground}
          />
        </Stack>
        <div style={{ display: "flex" }}>
          <Skeleton
            variant="rectangular"
            width={400}
            height={200}
            style={skeletonBackground}
          />
          <Skeleton
            variant="rectangular"
            width={400}
            height={200}
            style={skeletonBackground}
          />
          <Skeleton
            variant="rectangular"
            width={400}
            height={200}
            style={skeletonBackground}
          />
        </div>
        <Stack spacing={2}>
          <Skeleton
            variant="rectangular"
            width={900}
            height={300}
            style={skeletonBackground}
          />
        </Stack>
      </div>
    );
  } else {
    return (
      <div className="trending">
        <div className="trending-title">
          <h2>Trending</h2>
        </div>
        <div className="row">
          {trendingBlogs.map((blog) => (
            <ColumnCard
              key={blog._id}
              imageUrl={blog.image}
              title={blog.title}
              date={blog.date}
              id={blog._id}
            />
          ))}
        </div>

        <div className="banner">
          <img
            src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/02/SMARTMAG-BANNER-1200-20-1@2x.jpg"
            alt=""
          />
        </div>

        <Listings />
      </div>
    );
  }
}

export default Trending;
