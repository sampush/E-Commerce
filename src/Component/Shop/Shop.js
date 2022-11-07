import React from "react";
import "./Shop.css";
import Shup from "../../Component/Shop3.png";
import Shup1 from "../../Component/Shop4.png";
import Shup2 from "../../Component/Shop5.png";
import Shup3 from "../../Component/Shop6.png";
import Shup4 from "../../Component/Shop7.png";

function Shop() {
  return (
    <div>
      <div></div>
      <div className="shop-text">
        <h1>SHOP ALL</h1>
      </div>
      <div className="Shup-text">
        <div>
          <img src={Shup} alt="" />
          <p>Cartel Postal Briefs</p>
          <div className="shop-split">
            <p id="p-1">*****</p>
            <p id="p-2">$24</p>
          </div>
        </div>
        <div>
          <img src={Shup1} alt="" />
          <p>Cartel Postal Briefs</p>
          <div className="shop-split">
            <p id="p-1">*****</p>
            <p id="p-2">$24</p>
          </div>
        </div>
        <div>
          <img src={Shup2} alt="" />
          <p>Cartel Postal Briefs</p>
          <div className="shop-split">
            <p id="p-1">*****</p>
            <p id="p-2">$24</p>
          </div>
        </div>
        <div>
          <img src={Shup3} alt="" />
          <p>Cartel Postal Briefs</p>
          <div className="shop-split">
            <p id="p-1">*****</p>
            <p id="p-2">$24</p>
          </div>
        </div>
        <div>
          <img src={Shup4} alt="" />
          <p>Cartel Postal Briefs</p>
          <div className="shop-split">
            <p id="p-1">*****</p>
            <p id="p-2">$24</p>
          </div>
        </div>
        <div>
          <img src={Shup} alt="" />
          <p>Cartel Postal Briefs</p>
          <div className="shop-split">
            <p id="p-1">*****</p>
            <p id="p-2">$24</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
