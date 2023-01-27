import React from "react";
import "../CSS/RowCard.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function RowCard({ imageUrl, tag, title, name, date, id }) {
  // const mode = useSelector((state) => state.mode);
  const mode = localStorage.getItem("thememode");
  return (
    <Link className="row-card" to={`/blogs/${id}`}>
      <div className="row-img-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="row-details">
        <h5 className="row-tag">{tag}</h5>
        <div
          className={mode === "dark" ? "row-title dark-row-title" : "row-title"}
        >
          <Link to={`/blogs/${id}`}>{title}</Link>
        </div>
        <p
          className={
            mode === "dark" ? "row-creation dark-row-creation" : "row-creation"
          }
        >
          By{" "}
          <span className={mode === "dark" ? "dark-row-creator" : ""}>
            {name}
          </span>{" "}
          - {date}
        </p>
      </div>
    </Link>
  );
}

export default RowCard;
