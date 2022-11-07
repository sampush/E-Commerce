import React from "react";
import Big from "../../Component/Big.png";
// import Clothe from "../Clothe.png";
// import Clothe1 from "../Clothe1.png";
// import Clothe2 from "../Clothe2.png";
// import Clothe3 from "../Clothe3.png";
// import { Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "./Iconics.css";

function Iconics() {
  return (
    <div>
      <div className="ice-one">
        <div>
          <img src={Big} alt="" />
          <p>Carte postal briefs</p>
          <p>$34</p>
        </div>

        <div className="ice-two">
          <h2>NEW-INS</h2>
          {/* <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={1}
            // padding={5}
            //   box-sizing={border-box}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="duet">
              <SwiperSlide>
                <img src={Clothe} alt="" />
                <p>Carte postal briefs</p>
                <p>$24</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clothe1} alt="" />
                <p>Carte postal briefs</p>
                <p>$24</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clothe2} alt="" />
                <p>Carte postal briefs</p>
                <p>$24</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clothe3} alt="" />
                <p>Carte postal briefs</p>
                <p>$24</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clothe} alt="" />
                <p>Carte postal briefs</p>
                <p>$24</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clothe1} alt="" />
                <p>Carte postal briefs</p>
                <p>$24</p>
              </SwiperSlide>
            </div>
          </Swiper> */}
        </div>
      </div>
      <div className="sphere">
            <p>Shop all Iconics</p>
      </div>
    </div>
  );
}

export default Iconics;
