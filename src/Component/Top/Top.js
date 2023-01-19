import React from "react";
import "./Top.css";
import Blak from "../Blackimg.png";


import Tin1 from "../imago/Tin1.png";
import Tin2 from "../imago/Tin2.png";
import Tin3 from "../imago/Tin3.png";
import Tin4 from "../imago/Tin2.png";


function Top() {
  return (
    <div className="mix-topp">
      <div>
        <div className="smil">
          <p>
            <span id="blic">Home/Tops/</span>
            <span id="gen">Green Top</span>
          </p>
        </div>
        <div>
          <img src={Blak} alt="" />
        </div>
      </div>

      <div className="swip-tree">
        <div className="caro">
          <h4>&lt;</h4>
          <img src={Tin2} alt=""/>
          <img src={Tin1} alt=""/>
          <img src={Tin2} alt=""/>
          <img src={Tin3} alt=""/>
          <img src={Tin4} alt=""/>
          <h4>&gt;</h4> 
        </div>

        <div>
          <h3>BEACH DRESS</h3>
          <p>
            <span id="mint">$ 24</span> <span id="bundle"> $95.00</span>
          </p>

          <p>
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
            text used in design when creating content. It helps designers plan
            out where the content will sit, without needing to wait for the
            content to be written and approved. It originally comes from a Latin
            text, but to today's reader, it's seen as gibberish.
          </p>
          <div className="fum">
            <form>
              <select id="size" name="size" placeholder="Select Size">
                <option value="">Select Size</option>
                <option value="S">S</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </form>
          </div>

          <div className="butt">
            <div className="butt-1">
              <input type="submit" value="ADD TO CART"></input>
            </div>

            <div className="butt-2">
              <input type="submit" value="BUY NOW"></input>
            </div>
          </div>

          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <p>Composition and care</p>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <p>Delivery,Exchanges and Returns</p>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <p>Questions</p>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
