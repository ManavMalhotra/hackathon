import { InputBase } from "@mui/material";
import "./Text_input.css";
import React from "react";
import Preview from "./Preview";

function Text_input() {
  return (
    <div className="main">
      <InputBase
        id="placeholder-1"
        sx={{ ml: 1, flex: 1 }}
        placeholder="     Start from here ......."
        inputProps={{ "aria-label": "search google maps" }}
        // onChange={(event) => setQuery(event.target.value)}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <button className="btn-4">Preview</button> */}
        <Preview />
      </div>
    </div>
  );
}

export default Text_input;
