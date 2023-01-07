import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";

export default function ScrollTop({ parent }) {
  console.log(parent);
  return (
    <Button
      variant="contained"
      onClick={() => parent.current.scrollIntoView({ behavior: "smooth" })}
      style={{
        backgroundColor: "white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        position: "fixed",
        bottom: "15px",
        right: "50px",
        zIndex: "9999999",
        minWidth: "0",
      }}
    >
      <KeyboardArrowUpIcon fontSize="large" style={{ color: "#004658" }} />
    </Button>
  );
}
