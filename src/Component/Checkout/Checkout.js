import React from "react";
import "./Checkout.css";
import { FaCcPaypal, FaCcApplePay } from "react-icons/fa";

function Checkout() {
  return (
    <div className="top-pay">
      <div>
        <div className="paymet">
          <div className="pooop">
            <button className="apple">
              <FaCcApplePay />
            </button>
          </div>

          <div className="pooop">
            <button className="apple">
              <FaCcPaypal />
            </button>
          </div>
        </div>
      </div>

      <div className="bot-fill">
        <form class="row g-3">
          <div class="col-12">
            <label for="inputEmail4" class="form-label text-primary">
              <p>CONTACT INFORMATION</p>
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email*"
            />
          </div>

          <div class="col-12">
            <label for="inputPassword4" class="form-label   text-primary">
              <p>SHIPPING ADDRESS</p>
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Full Name*"
            />
          </div>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Street Address*"
            />
          </div>
          <div class="col-12">
            <input type="text" class="form-control" id="inputAddress2" />
          </div>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="City*"
            />
          </div>
          <div class="col-md-4">
            <select
              id="inputState"
              class="form-select"
              placeholder="State/Province"
            >
              <option selected>State/Province</option>
              <option>Abia</option>
            </select>
          </div>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="inputZip"
              placeholder="Zip/Postal Code"
            />
          </div>

          <div class="col-12">
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Country*"
            />
          </div>
        </form>
        


        {/* secod line */}
        <div className="meth-1">
          <div className="text-meth">
            <p>SHIPPING METHOD</p>
          </div>
          
          <div>
            <div class="border border-secondary p-2 mb-2">
              <div className="ship-split">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate"
                  />
                  <label class="form-check-label" for="flexCheckIndeterminate">
                    <p className="thick">Flat rate</p>
                    <p>Standard flate rate shipping for all items</p>
                  </label>
                </div>
                <div>
                  <p className="thick">$8.90 USD</p>
                </div>
              </div>
            
            </div>
          </div>

          <div>
            <div class="border border-secondary p-2 mb-2">
              <div className="ship-split">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate"
                  />
                  <label class="form-check-label" for="flexCheckIndeterminate">
                    <p className="thick">Expedited shipping </p>
                    <p>Expedited shipping to get the</p>
                    <p>shipment in a day or two</p>
                  </label>
                </div>
                <div>
                  <p className="thick">$122.85 USD</p>
                </div>
              </div>
            
            </div>
          </div>


          <div>
            <div class="border border-secondary p-2 mb-2">
              <div className="ship-split">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate"
                  />
                  <label class="form-check-label" for="flexCheckIndeterminate">
                    <p className="thick">Overnight Shipping</p>
                    <p>An expensive option to get the</p>
                    <p>shipment on the next business day </p>
                  </label>
                </div>
                <div>
                  <p className="thick">$222.30 USD</p>
                </div>
              </div>
            
            </div>
          </div>


        </div>

        {/* third line */}
        <div>
        <form class="row g-3">
          <div class="col-12">
            <label for="inputEmail4" class="form-label text-primary">
              <p>PAYMENT INFO </p>
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Card number*"
            />
          </div>

          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="Expiration date*"
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="Security code*"
            />
          </div>

          <div class="col-12">
            <label for="inputPassword4" class="form-label   text-primary">
              <p>BILLING ADDRESS</p>
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Full Name*"
            />
          </div>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Street Address*"
            />
          </div>
          <div class="col-12">
            <input type="text" class="form-control" id="inputAddress2" />
          </div>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="City*"
            />
          </div>
          <div class="col-md-4">
            <select
              id="inputState"
              class="form-select"
              placeholder="State/Province"
            >
              <option selected>State/Province</option>
              <option>Abia</option>
            </select>
          </div>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="inputZip"
              placeholder="Zip/Postal Code"
            />
          </div>

          <div class="col-12">
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Country*"
            />
          </div>
        </form>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
