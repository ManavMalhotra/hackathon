import React from "react";
import { useState } from 'react'
import { navigate  } from 'react-router-dom';

import registerHandle from "../utils/registerHandle.js"
import "./registration_styles.css";

function Registration() {
  let [name, setName] = useState('')
  let [username, setUsername] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const navigate  = navigate();


  const handleSubmit = async (ev)=>{
    ev.preventDefault()

    try{
      let info = {
        name,
        username,
        password
        }
        console.log(info)
      let user = await registerHandle(info)

    }catch(err){

    }

  }
  return (
    <>
      {/* <div>
        <img
          className="blob"
          src="./blob-1.png"
          style={{
            position: "absolute",
            top: "-18%",
            // transform: "rotate(255deg)",
            left: "51%",
            scale: "0.3",
          }}
        />
      </div> */}
      <form onSubmit={handleSubmit} className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Name" onChange={({ target }) => setName(target.value)} />
        </div>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Email" onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" onChange={({ target }) => setPassword(target.value)} />
        </div>
        <input type="submit" className="btn" value="Sign up" />
        <p className="social-text">Or Sign in with social platforms</p>
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
      {/* <div>
        <img
          src="./blob-1.png"
          className="blob"
          style={{
            position: "absolute",
            top: "35%",
            transform: "rotateY(180deg)",
            left: "0%",
            scale: "0.3",
          }}
        />
      </div> */}
    </>
  );
}

export default Registration;
