import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../CSS/Listings.css";
import RowCard from "./RowCard";
import ColumnCard from "./ColumnCard";
import { Link } from "react-router-dom";
function Listings(props) {
  const [listingsBlogs, setListingsBlogs] = useState([]);
  const [pickBlogs, setPickBlogs] = useState([]);
  useEffect(() => {
    async function fetchListingsBlogs() {
      const res = await axios.get("/api/blog/get/listings");
      setListingsBlogs(res.data.listings);
    }
    async function fetchPickBlogs() {
      const res = await axios.get("/api/blog/get/picks");
      setPickBlogs(res.data.picks);
    }
    fetchListingsBlogs();
    fetchPickBlogs();
  }, []);
  console.log(pickBlogs);
  return (
    <div className="listings">
      <div className="left-section">
        {listingsBlogs.map((blog) => (
          <RowCard
            key={blog._id}
            imageUrl={blog.image}
            tag={blog.category}
            title={blog.title}
            name={"Shane Doe"}
            date={blog.date}
            id={blog._id}
          />
        ))}
      </div>
      <div className="right-section">
        <div className="editors-pick-title">
          <h2>Editor's Pick</h2>
        </div>
        {pickBlogs.map((blog) => (
          <ColumnCard
            key={blog._id}
            imageUrl={blog.image}
            title={blog.title}
            width={"100%"}
            height={"200px"}
            id={blog._id}
          />
        ))}
        {/* <ColumnCard
          imageUrl={
            "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_425000148_xl-2015-1024x672.jpg"
          }
          title={"5 Things the Canon EOS R1 Needs to Compete With the Sony A1"}
          width={"100%"}
          height={"200px"}
        />
        <ColumnCard
          imageUrl={
            "https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_273724454_xl-2015-1024x683.jpg"
          }
          title={
            "Hyundai’s Value Surges Amid Reports of Apple Electric Car Deal"
          }
          width={"100%"}
          height={"200px"}
        />
        <ColumnCard
          imageUrl={
            "https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/Depositphotos_108576662_xl-2015-1024x684.jpg"
          }
          title={"VR – How the Gaming Industry Adapts to a New Reality"}
          width={"100%"}
          height={"200px"}
        /> */}
      </div>
    </div>
  );
}

export default Listings;
