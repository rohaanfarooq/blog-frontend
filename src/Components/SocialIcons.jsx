import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../CSS/Login.css";
function SocialMediaIcons(props) {
  const mode = localStorage.getItem("thememode");
  return (
    <div>
      <div className="social-media">
        <a
          href="#"
          className={
            mode === "dark" ? "social-icon dark-social-icon" : "social-icon"
          }
        >
          <FacebookOutlinedIcon />
        </a>
        <a
          href="#"
          className={
            mode === "dark" ? "social-icon dark-social-icon" : "social-icon"
          }
        >
          <TwitterIcon />
        </a>
        <a
          href="#"
          className={
            mode === "dark" ? "social-icon dark-social-icon" : "social-icon"
          }
        >
          <GoogleIcon />
        </a>
        <a
          href="#"
          className={
            mode === "dark" ? "social-icon dark-social-icon" : "social-icon"
          }
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default SocialMediaIcons;
