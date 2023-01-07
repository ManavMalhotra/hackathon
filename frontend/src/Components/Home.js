import { Button } from "@mui/material";
import React, { useRef } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./home.css";
import ScrollTop from "./ScrollTop";
import { Link } from "react-router-dom";
import TestimonialSlider from "./Testimonials";

function Home() {
  let mainDiv = useRef();
  return (
    <div className="main" ref={mainDiv}>
      <div className="hero">
        <div className="info">
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            aperiam. Error, officiis porro. Provident odio, est non placeat
            mollitia totam, molestias facere iste pariatur quos reiciendis ab
            architecto! Ratione, iusto?
          </p>
        </div>
        <div className="image">
          <img src="./Learn.jpg" />
        </div>
      </div>
      <ScrollTop parent={mainDiv} />
      <div class="second1">
        <p style={{ fontFamily: "Montserrat" }}>
          <i>
            "The more that you read, the more things you will know. The more
            that you learn, the more places you'll go"
          </i>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <ArrowDownwardIcon />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn-3">Learn More about our Website</button>
      </div>

      <div className="selector">
        <div className="button-1">
          <h3>Fun</h3>
          <Button
            style={{ height: "500px", width: "500px", borderRadius: "50%" }}
          >
            <Link to={"./fun"}>
              <img
                src="./fun.jpg"
                style={{ height: "500px", width: "500px", borderRadius: "50%" }}
              />
            </Link>
          </Button>
        </div>

        <div className="button-2">
          <h3>Study</h3>
          <Button
            style={{ height: "500px", width: "500px", borderRadius: "50%" }}
          >
            <Link to={"./study"}>
              <img
                src="./study.jpg"
                style={{ height: "500px", width: "500px", borderRadius: "50%" }}
              />
            </Link>
          </Button>
        </div>
      </div>
      <div className="testimonial">
        <TestimonialSlider />
      </div>
    </div>
  );
}

export default Home;
