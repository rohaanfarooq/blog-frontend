import React, { useEffect, useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import "../CSS/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  // const mode = useSelector((state) => state.mode);
  const mode = localStorage.getItem("thememode");

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const username = localStorage.getItem("username");
  const location = useLocation();

  // const theme = themeSettings()

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
      // console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const DropdownMenu = () => {
    return (
      <div className="dropdown-menu">
        {isLoggedIn && (
          <>
            <div className="profile-circle">
              <p>{username.charAt(0)}</p>
            </div>
            <h3>{username}</h3>
          </>
        )}
        <ul>
          <div className="dropdown-item">
            <EditOutlinedIcon className="dropdown-icon" />
            <li>Edit Profile</li>
          </div>
          <div className="dropdown-item">
            <NewspaperOutlinedIcon className="dropdown-icon" />
            <li onClick={() => navigate("/my-blogs")}>My Blogs</li>
          </div>
          {isLoggedIn ? (
            <div
              className="dropdown-item"
              onClick={() => dispatch(authActions.logout())}
            >
              <LogoutIcon className="dropdown-icon" />
              <li>Logout</li>
            </div>
          ) : (
            <div
              className="dropdown-item"
              onClick={() => {
                dispatch(authActions.updateRedirect(location.pathname));
                navigate("/auth");
              }}
            >
              <LoginIcon className="dropdown-icon" />
              <li>Login</li>
            </div>
          )}
        </ul>
      </div>
    );
  };
  return (
    <div
      className={`${
        sticky ? `navbar sticky navbar-${mode}` : `navbar navbar-${mode}`
      }`}
    >
      <div className="logo">
        <h2
          className={mode === "dark" ? "logo-dark" : ""}
          onClick={() => navigate("/")}
        >
          R<span>Blog</span>{" "}
        </h2>
      </div>
      <nav>
        {menuOpen ? (
          <div className="menu">
            <CloseOutlinedIcon
              className={`icon ${mode === "dark" ? "icon-dark" : ""}`}
              onClick={handleMenu}
            />
          </div>
        ) : (
          <div className="menu">
            <MenuOutlinedIcon
              className={`icon ${mode === "dark" ? "icon-dark" : ""}`}
              onClick={handleMenu}
            />
          </div>
        )}
        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "active"
                : `nav-link ${mode == "dark" ? "nav-links-dark" : ""}`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => {
              return isActive
                ? "active"
                : `nav-link ${mode == "dark" ? "nav-links-dark" : ""}`;
            }}
          >
            Blogs
          </NavLink>

          {isLoggedIn && (
            <>
              <NavLink
                to="/my-blogs"
                className={({ isActive }) => {
                  return isActive
                    ? "active"
                    : `nav-link ${mode == "dark" ? "nav-links-dark" : ""}`;
                }}
              >
                My Blogs
              </NavLink>

              <NavLink
                to="/new-blog"
                className={({ isActive }) => {
                  return isActive
                    ? "active"
                    : `nav-link ${mode == "dark" ? "nav-links-dark" : ""}`;
                }}
              >
                Add New Blog
              </NavLink>
            </>
          )}
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return isActive
                ? "active"
                : `nav-link ${mode == "dark" ? "nav-links-dark" : ""}`;
            }}
          >
            Contact Us
          </NavLink>
        </div>
      </nav>

      <div className="icons">
        {mode === "light" ? (
          <DarkModeOutlinedIcon
            className={`icon ${mode === "dark" ? "icon-dark" : ""}`}
            onClick={() => dispatch(authActions.changeMode())}
          />
        ) : (
          <LightModeOutlinedIcon
            className={`icon ${mode === "dark" ? "icon-dark" : ""}`}
            onClick={() => dispatch(authActions.changeMode())}
          />
        )}
        <SearchIcon className={`icon ${mode === "dark" ? "icon-dark" : ""}`} />
        <PersonOutlineOutlinedIcon
          className={`icon ${mode === "dark" ? "icon-dark" : ""}`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
      </div>

      {dropdownOpen && <DropdownMenu />}
    </div>
  );
}

export default Navbar;
