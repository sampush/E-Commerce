import React from "react";
import "./Side.css";
import small from "../imago/small3.png";

function Side() {
  return (
    <div>
      <div className="small-top">
        <div>
          <img src={small} alt="" />
        </div>
        <div className="small-top2">
          <div className="">
            <div className="small-border">
              <h6>BIKIN DEAL</h6>
              <p>Size: Small</p>
              <p>Color: Till</p>
            </div>
          </div>
          <div>
            <h6>Remove</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Side;
