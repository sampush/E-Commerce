import React from "react";
import { Link } from "react-router-dom";
import "./Follow.css";

function Follow() {
  return (
    <div className="design-follow">
      <div>
        <h1>FOLLOW US</h1>
      </div>
      <div>
        <Link to="/" class="fa fa-facebook"></Link>
        <Link to="/" class="fa fa-twitter"></Link>
        <Link to='/' class="fa fa-google"></Link>
        <Link to='/' class="fa fa-linkedin"></Link>
        <Link to='/' class="fa fa-youtube"></Link>
        <Link to='/' class="fa fa-instagram"></Link>
      </div>
      <div className="sphere2">
                <p>@SAMAD</p>
            </div>
    </div>
  );
}

export default Follow;
