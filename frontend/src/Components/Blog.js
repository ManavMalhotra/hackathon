import { IconButton, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../blog.css";

function Blog() {
  return (
    <div className="searchBar">
      <InputBase
        id="placeholder"
        sx={{ ml: 1, flex: 1 }}
        placeholder="     Search For article"
        inputProps={{ "aria-label": "search google maps" }}
        // onChange={(event) => setQuery(event.target.value)}
      />

      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default Blog;
