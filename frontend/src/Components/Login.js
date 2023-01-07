import React, { useEffect } from "react";
import { useState } from "react";
import loginHandle from "../utils/loginHandle.js";
import "./registration_styles.css";
import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";

function Login() {
  let [name, setName] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.getItem("ajs_user_id");
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      let info = {
        username,
        password,
      };
      console.log("hello");
      let user = await loginHandle(info);
      console.log("hi");
      localStorage.setItem("loggedAppUser", JSON.stringify(user));
      window.location.href = "/";
    } catch (err) {}
  };

  return (
    <>
      <div>
        {/* <img
          className="blob"
          src="./blob-1.png"
          style={{
            position: "absolute",
            top: "-18%",
            // transform: "rotate(255deg)",
            left: "51%",
            scale: "0.3",
          }}
        /> */}
      </div>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <input type="submit" value="Login" className="btn solid" />
        <p className="social-text">
          Or{" "}
          <Link to={"/registration"}>
            <p style={{ color: "black" }}>Sign Up</p>
          </Link>
        </p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
      <div>
        {/* <img
          src="./blob-1.png"
          className="blob"
          style={{
            position: "absolute",
            top: "35%",
            transform: "rotateY(180deg)",
            left: "0%",
            scale: "0.3",
          }}
        /> */}
      </div>
    </>
  );
}

export default Login;
