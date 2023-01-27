import React from "react";
import "../CSS/Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Footer(props) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div className="footer">
      <div className="footer-logo">
        <h2>
          R<span>Blog</span>
        </h2>
        <div className="footer-social-icons">
          <div className="icon-container">
            <FacebookOutlinedIcon className="footer-icon" />
          </div>
          <div className="icon-container">
            <TwitterIcon className="footer-icon" />
          </div>
          <div className="icon-container">
            <InstagramIcon className="footer-icon" />
          </div>
          <div className="icon-container">
            <PinterestIcon className="footer-icon" />
          </div>
          <div className="icon-container">
            <LinkedInIcon className="footer-icon" />
          </div>
          <div className="icon-container">
            <YouTubeIcon className="footer-icon" />
          </div>
        </div>
        <div className="footer-menu-links">
          <nav className="footer-nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            {isLoggedIn && (
              <>
                <Link to={"/my-blogs"}>My Blogs</Link>
                <Link to={"/new-blog"}>Add New Blog</Link>
              </>
            )}
            <Link to={"/contact"}>Contact Us</Link>
          </nav>
        </div>
        <div className="copyright-text">
          <p>
            © 2022 RBlog. All rights reserved by <span>RBlog</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
