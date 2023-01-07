import { Button } from "@mui/material";
import React, { useRef } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./home.css";
import ScrollTop from "./ScrollTop";

function Home() {
  let mainDiv = useRef();
  return (
    <div className="main" ref={mainDiv}>
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
          marginBottom: "30px",
        }}
      >
        <ArrowDownwardIcon />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn">Learn More about our Website</button>
      </div>

      <div className="selector">
        <div className="button-1">
          <h3>Fun</h3>
          <Button
            style={{ height: "500px", width: "500px", borderRadius: "50%" }}
          >
            <img
              src="./fun.jpg"
              style={{ height: "500px", width: "500px", borderRadius: "50%" }}
            />
          </Button>
        </div>
        <div className="button-1">
          <h3>Study</h3>
          <Button
            style={{ height: "500px", width: "500px", borderRadius: "50%" }}
          >
            <img
              src="./study.jpg"
              style={{ height: "500px", width: "500px", borderRadius: "50%" }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
