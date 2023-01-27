import React from "react";
import { useSelector } from "react-redux";
import "../CSS/PageLoader.css";

function PageLoader(props) {
  // const mode = useSelector((state) => state.mode);
  const mode = localStorage.getItem("thememode");
  return (
    <div
      className={
        mode === "dark" ? "page-loader page-loader-dark" : "page-loader"
      }
    >
      <div class="loader-container">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>
    </div>
  );
}

export default PageLoader;
