import { Typography } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";

function Study_mainPage() {
  return (
    <>
      <div className="main">
        <br />
        <br />
        <Typography variant="h4" gutterBottom>
          Choose an option to procced
        </Typography>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <ArrowDownwardIcon />
        </div>
        <br />
        <br />

        <button className="btn-7">
          <Link to={"/Study/text_input"}>Text as an input</Link>
        </button>
        <br />
        <br />
        <button className="btn-7">
          <Link to={"/study/image_input"}>Image as an input</Link>
        </button>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Study_mainPage;
