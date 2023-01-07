import * as React from "react";
import Backdrop from "@mui/material/Backdrop";

import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";

import Loading from "./Loading_animation";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

export default function Preview() {
  const [open, setOpen] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setPlayAnimation(true);
    setOpen(true);
    setTimeout(() => {
      setPlayAnimation(false);
    }, 2000);
  };

  return (
    <div>
      <button className="btn-4" onClick={handleOpen}>
        Preview
      </button>
      <Backdrop
        sx={{ color: "black", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div>
          {!playAnimation && (
            <>
              {" "}
              <div>
                <Button
                  onClick={handleClose}
                  style={{
                    borderRadius: "50%",
                    height: "70px",
                    width: "70px",
                    justifyItems: "end",
                    color: "#004658",
                  }}
                >
                  <CloseIcon fontSize="large" />
                </Button>
              </div>
              <div
                style={{
                  height: "430px",
                  width: "80%",
                  borderRadius: "100px",
                  backgroundColor: "white",
                  display: "flexbox",
                  marginLeft: "5%",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                  paddingTop: "30px",
                }}
              >
                {/* <div
                  className="tittle"
                  style={{
                    marginTop: "-90px",
                    backgroundColor: "white",
                    width: "30px",
                    boarderRadius: "30px",
                  }}
                >
                  <h2>Preview</h2> */}
                {/* </div> */}
                <h2 style={{ fontFamily: "Poppins, sans-serif" }}>Tittle</h2>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "300px",
                  }}
                >
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  exercitationem beatae laboriosam deleniti quos quisquam omnis
                  architecto? Libero ducimus incidunt aut modi iusto, dolores
                  consequuntur sed quis possimus ullam ad?
                </p>
                <button className="btn" style={{}}>
                  {" "}
                  Post{" "}
                </button>
              </div>
            </>
          )}
        </div>

        {playAnimation && <Loading />}
      </Backdrop>
    </div>
  );
}
