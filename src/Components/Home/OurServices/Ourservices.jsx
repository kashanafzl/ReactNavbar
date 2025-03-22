import React from "react";
import "./Ourservices.css";

import buyicon from "../../../Assets/img/icon1.svg";
import buyicon2 from "../../../Assets/img/icon2.svg";
import buyicon3 from "../../../Assets/img/icon3.svg";

export default function Ourservices() {
  return (
    <div>
      <div className="bgservices">
        <h1>Our Services</h1>

        <div className="servicesmaindiv">
          <div className="servicescarddiv">
            <img src={buyicon} alt="" />
            <h4>Buy A new Car</h4>
            <p>
              Choosing the perfect vehicle requires careful consideration of
              your needs, budget, and preferences. This guide walks you
            </p>
          </div>

          <div className="servicescarddiv">
            <img src={buyicon2} alt="" />
            <h4>Buy A new Car</h4>
            <p>
              Choosing the perfect vehicle requires careful consideration of
              your needs, budget, and preferences. This guide walks you
            </p>
          </div>

          <div className="servicescarddiv">
            <img src={buyicon3} alt="" />
            <h4>Buy A new Car</h4>
            <p>
              Choosing the perfect vehicle requires careful consideration of
              your needs, budget, and preferences. This guide walks you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
