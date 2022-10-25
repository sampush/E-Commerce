import React from "react";
import "./Collaboration.css";

function Collaboration() {
  return (
    <div className="text-head">
      <div className="text-cs">
        <h6>DESIGNERS WE COLLABORATE WITH</h6>
      </div>
      <div className="text-cs">
        <h1>
          <sup>(NY)</sup>CAMEROUN WILLIAMSON
        </h1>
        <h1>
          <sup>(LDN)</sup>DARLENE ROBERTONS
        </h1>
        <h1>
          <sup>(LA)</sup>DAVON LANE
        </h1>
        <h1>
          <sup>(BER)</sup>BROXLY SIMONE
        </h1>
        <h1>
          <sup>(ROM)</sup>WADE WARRON
        </h1>
        <h1>
          LIESE ALEXANDRA<sup>(ZRH)</sup>
        </h1>
        <h1>
          <sup>(ROM)</sup>DANIEL RUSSEL
        </h1>
        <h1>
          <sup>(ROM)</sup>JACOB JONES
        </h1>
        <h1>
          <sup>(ROM)</sup>
        </h1>
      </div>

      <div className="text-load">
        {/* <img src="" alt="" /> */}
        <a href="/">
          <h3>LOAD MORE...</h3>
        </a>
      </div>
      <div className="section-2">
        <h6>DESIGNERS WE ARE WORKING WITH</h6>
        <marquee className="blink">
          <h1>
          <span id="line">*</span> CAMEROUN WILLIAMSON <span id="line">*</span>  BROOKLYN SIMOONS <span id="line">*</span>  BENEDICT EVLYN <span id="line">*</span>  
            JEFFERY ALESSIOE <span id="line">*</span>  ALEXANDER LISSEI  <span id="line">*</span> KENNETH WENDY
          </h1>
        </marquee> 
      </div>
    </div>
  );
}

export default Collaboration;
