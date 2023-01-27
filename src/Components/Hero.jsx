import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "../CSS/Hero.css";
function Hero(props) {
  const [heroBlogs, setHeroBlogs] = useState([]);
  const mode = localStorage.getItem("thememode");
  useEffect(() => {
    async function fetchHeroBlogs() {
      const res = await axios.get("/api/blog/get/headlines");
      setHeroBlogs(res.data.headline);
    }
    fetchHeroBlogs();
  }, []);
  const skeletonBackground = {
    backgroundColor: mode == "dark" ? "#444" : "",
  };
  if (heroBlogs.length == 0) {
    return (
      <div className="skeletons" style={{ display: "flex" }}>
        <Stack spacing={1}>
          <Skeleton
            variant="rectangular"
            width={1600}
            height={500}
            style={skeletonBackground}
          />
        </Stack>
      </div>
    );
  } else {
    return (
      <div className="hero">
        <Link className="main_img" to={`blogs/${heroBlogs[0]._id}`}>
          <img src={heroBlogs[0].image} alt="" />
          <div className="details">
            <p className="tag">{heroBlogs[0].category}</p>
            <div className="title">
              <h2>{heroBlogs[0].title}</h2>
            </div>
            <p className="creation">
              {heroBlogs[0].user.name} - {heroBlogs[0].date}
            </p>
          </div>
        </Link>

        <div className="sub_imgs">
          <Link className="img_c" to={`blogs/${heroBlogs[1]._id}`}>
            <img src={heroBlogs[1].image} alt="" />
            <div className="details">
              <p className="tag">{heroBlogs[1].category}</p>
              <div className="title">
                <h2>{heroBlogs[1].title}</h2>
              </div>
              <p className="creation">
                {heroBlogs[1].user.name} - {heroBlogs[1].date}
              </p>
            </div>
          </Link>
          {/* <div className="sub_imgs"> */}
          <Link className="img_c" to={`blogs/${heroBlogs[2]._id}`}>
            <img src={heroBlogs[2].image} alt="" />
            <div className="details">
              <p className="tag">{heroBlogs[2].category}</p>
              <div className="title">
                <h2>{heroBlogs[2].title}</h2>
              </div>
              <p className="creation">
                {heroBlogs[2].user.name} - {heroBlogs[2].date}
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Hero;
