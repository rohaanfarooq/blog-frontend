import React, { useState } from "react";
import "../CSS/Login.css";
import loginImage from "../images/login.svg";
import loginImage2 from "../images/login_2.svg";
import registerImage from "../images/register.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store";
import axios from "../axios";
import PageLoader from "../Components/PageLoader";
import { loginfields, signupfields } from "../inputfields";
import InputComponent from "../Components/InputComponent";
import SocialMediaIcons from "../Components/SocialIcons";

function Login(props) {
  const mode = localStorage.getItem("thememode");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let redirectPath = useSelector((state) => state.redirectTo);
  if (typeof redirectPath === "object") {
    redirectPath = redirectPath.payload;
  }
  console.log("redirectPath = ", redirectPath);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signInMode, setSignInMode] = useState(true);
  const [loading, setloading] = useState(false);

  const handleSignIn = () => {
    setSignInMode(true);
  };

  const handleSignUp = () => {
    setSignInMode(false);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type) => {
    const res = await axios
      .post(`/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log("dataa is: ", data);

    if (type === "signup") {
      localStorage.setItem("userId", data.newUser._id);
      localStorage.setItem("username", data.newUser.name);
    } else {
      localStorage.setItem("userId", data.user._id);
      localStorage.setItem("username", data.user.name);
    }

    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    console.log(inputs);
    if (!signInMode) {
      dispatch(authActions.updateRedirect("/"));
      // redirectPath = redirectPath.payload;
      console.log(redirectPath);
      sendRequest("signup")
        .then(() => dispatch(authActions.login()))
        .then(() => navigate(redirectPath))
        .then((data) => console.log("data is:", data))
        .catch((err) => console.log(err));
    } else {
      dispatch(authActions.updateRedirect("/"));
      // redirectPath = redirectPath.payload;
      console.log(redirectPath);
      sendRequest("login")
        .then(() => dispatch(authActions.login()))
        .then(() => navigate(redirectPath))
        .then((data) => console.log("data is:", data))
        .catch((err) => {
          console.log(err);
          // console.log(err.AxiosError.response.status);
          // console.log(err.message);
          // console.log(err.response.headers); // 👉️ {... response headers here}
          // console.log(err.response.data);
        });
    }
    setInputs((prevState) => ({
      ...prevState,
      name: "",
      email: "",
      password: "",
    }));
  };

  if (loading) {
    return <PageLoader />;
  } else {
    return (
      <div className={signInMode ? "login sign-in-mode" : "login sign-up-mode"}>
        <div className="loading" />

        <div className="forms-container">
          <div className="signin-signup">
            {/* Sign In Form */}
            <form onSubmit={handleSubmit} className="sign-in-form">
              <h2 className={mode === "dark" ? "title dark-title" : "title"}>
                Sign in
              </h2>
              {loginfields.map((field) => (
                <InputComponent
                  icon={field.icon}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={inputs[field.name]}
                  onChange={handleChange}
                />
              ))}
              <input type="submit" value="Login" className="btn solid" />
              <p
                className={
                  mode === "dark"
                    ? "social-text dark-social-text"
                    : "social-text"
                }
              >
                Or Sign in with social Platforms
              </p>
              <SocialMediaIcons />
            </form>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="sign-up-form">
              <h2 className={mode === "dark" ? "title dark-title" : "title"}>
                Sign up
              </h2>
              {signupfields.map((field) => (
                <InputComponent
                  icon={field.icon}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={inputs[field.name]}
                  onChange={handleChange}
                />
              ))}
              <input type="submit" value="Sign up" className="btn solid" />
              <p
                className={
                  mode === "dark"
                    ? "social-text dark-social-text"
                    : "social-text"
                }
              >
                Or Sign up with social Platforms
              </p>
              <SocialMediaIcons />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New Here?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                natus suscipit quia in reprehenderit?
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>

            <img src={loginImage2} className="image" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                natus suscipit quia in reprehenderit?
              </p>
              <button
                className="btn transparent"
                id="sign-ip-btn"
                onClick={handleSignIn}
              >
                Sign in
              </button>
            </div>

            <img src={registerImage} className="image" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
