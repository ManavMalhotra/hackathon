import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="dashboard">
        <div class="empty">
          <div class="details">
            <div class="e-img">
              <img src="./av-5.png" alt="" />
            </div>
            <div className="inside">
              <h3
                style={{
                  marginTop: "3vh",
                  marginBottom: "5vh",
                  textShadow: "4px 4px 4px #aaa ",
                  fontSize: "2.5rem",
                }}
              >
                User Details
              </h3>
              <h5>Name : {this.state.userName}</h5>
              <h5>
                Credits :{" "}
                <img style={{ height: "35px" }} src="./coin.png"></img>
                {this.state.credits}{" "}
              </h5>
              <h5>Mobile-Number : {this.state.phone} </h5>
              <h5>Email Id : {this.state.email}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
