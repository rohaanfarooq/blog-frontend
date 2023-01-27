import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "../axios";
import TitleIcon from "@mui/icons-material/Title";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "../CSS/NewBlog.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function NewBlog(props) {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  // const mode = useSelector((state) => state.mode);
  const mode = localStorage.getItem("thememode");
  const [openBackdrop, setOpenBackdrop] = useState(false);
  // For filling out publish date of form
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    imageUrl: "",
    category: "",
    date: `${day}/${month}/${year}`,
  });

  const toggleBackdrop = () => {
    setOpenBackdrop(!openBackdrop);
  };
  // const handleCloseBackdrop = () => {
  //   setOpenBackdrop(false);
  // };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios.post("/api/blog/add", {
      title: inputs.title,
      description: inputs.desc,
      image: inputs.imageUrl,
      category: inputs.category,
      date: inputs.date,
      user: localStorage.getItem("userId"),
    });
    const data = res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputKeys = Object.keys(inputs);
    console.log(inputs);
    let empty = false;
    for (let i = 0; i < inputKeys.length; i++) {
      if (inputs[inputKeys[i]] == "") {
        empty = true;
      }
    }
    if (empty) {
      alert("fill out all the fields");
      return;
    }
    toggleBackdrop();
    sendRequest().then(() => navigate("/my-blogs"));
    toggleBackdrop();
  };
  return (
    <div className="new-blog">
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
          // onClick={handleCloseBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      <Navbar />
      <div className="new-blog-container">
        <div className="title-category">
          <input
            name="title"
            placeholder="Title"
            className={mode == "dark" ? "dark-create-blog-field" : ""}
            value={inputs.title}
            onChange={handleChange}
          />
          <select
            name="category"
            value={inputs.category}
            onChange={handleChange}
            className={
              mode == "dark"
                ? "categories dark-create-blog-field dark-select"
                : "categories"
            }
          >
            <option value="" selected disabled hidden>
              Choose Category
            </option>
            <option value="gaming">Gaming</option>
            <option value="tech">Tech</option>
            <option value="social">Social</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
          <div
            className={
              mode == "dark" ? "preview dark-create-blog-field" : "preview"
            }
          >
            <VisibilityOutlinedIcon
              className="preview-icon"
              sx={{ fontSize: "1.3rem" }}
            />
            <Link className="preview-btn" to={"/preview"} state={inputs}>
              Preview
            </Link>
          </div>

          <button className="publish-btn" onClick={handleSubmit}>
            Publish
          </button>
        </div>
        <div className="content-sidebar">
          <div className="content">
            <textarea
              className={
                mode == "dark"
                  ? "new-blog-content dark-create-blog-field"
                  : "new-blog-content"
              }
              name="desc"
              placeholder="Content"
              value={inputs.desc}
              onChange={handleChange}
            />
          </div>
          <div className="sidebar">
            <div className="sidebar-item-container">
              <p className={mode == "dark" ? "label dark-label" : "label"}>
                Author
              </p>
              <div
                className={
                  mode == "dark"
                    ? "sidebar-item dark-create-blog-field"
                    : "sidebar-item"
                }
              >
                <div className="author-initial">
                  <p className="initial">{username.charAt(0)}</p>
                </div>
                <p className="sidebar-item-text">{username}</p>
              </div>
              <p className={mode == "dark" ? "label dark-label" : "label"}>
                Image URL
              </p>
              <div
                className={
                  mode == "dark"
                    ? "sidebar-item img-url dark-create-blog-field"
                    : "sidebar-item img-url"
                }
              >
                <LinkIcon
                  className="publish-sidebar-icon"
                  sx={{ fontSize: "1.5rem" }}
                />
                <input
                  name="imageUrl"
                  type="text"
                  placeholder="Image URL"
                  value={inputs.imageUrl}
                  onChange={handleChange}
                />
              </div>
              <p className={mode == "dark" ? "label dark-label" : "label"}>
                Publish Date
              </p>
              <div
                className={
                  mode == "dark"
                    ? "sidebar-item dark-create-blog-field"
                    : "sidebar-item"
                }
              >
                <CalendarMonthOutlinedIcon
                  className="publish-sidebar-icon"
                  sx={{ fontSize: "1.4rem" }}
                />
                <p className="sidebar-item-text">
                  {day}/{month}/{year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBlog;

{
  /* <form className="new-blog-form" onSubmit={handleSubmit}>
          <h2 className="title">Create New Blog</h2>
          <div className="input-field">
            <TitleIcon className="icon" />
            <input
              name="title"
              type="text"
              placeholder="Title"
              value={inputs.title}
              onChange={handleChange}
            />
          </div>
          <div className="input-field content-container">
            <DescriptionOutlinedIcon className="icon" />
            <textarea
              className="new-blog-content"
              name="content"
              placeholder="Content"
              value={inputs.content}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <LinkIcon className="icon" />
            <input
              name="imageUrl"
              type="text"
              placeholder="Image URL"
              value={inputs.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <CategoryOutlinedIcon className="icon" />
            <select
              name="category"
              value={inputs.category}
              onChange={handleChange}
              className="categories"
            >
              <option value="" selected disabled hidden>
                Choose Caetgory
              </option>
              <option value="gaming">Gaming</option>
              <option value="tech">Tech</option>
              <option value="social">Social</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>
          <input type="submit" value="Create Blog" className="btn solid" />
        </form> */
}
