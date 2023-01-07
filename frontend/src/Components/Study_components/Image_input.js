import React from "react";
import "./Image_input.css";
import Preview from "./Preview";

function Image_input() {
  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          allignItems: "center",
        }}
      >
        <div className="image_dropper">
          <img src="../DragandDrop.webp" />
          <br />
          <div style={{ display: "inline" }}>
            <h4>Drag And Drop</h4>
            <br />
            <h4>Or</h4>
            <button className="btn">Upload</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          allignItems: "center",
        }}
      >
        <Preview />
      </div>
    </>
  );
}

export default Image_input;
