import React from "react";
import "./Topcar.css";

import car1 from "../../../Assets/img/c1.svg";
import car2 from "../../../Assets/img/c2.svg";
import car3 from "../../../Assets/img/c3.svg";
import car4 from "../../../Assets/img/c4.svg";
import car5 from "../../../Assets/img/c5.svg";

export default function Topcar() {
  return (
    <div>
      <div className="bgcardiv">
        <h1>Top-rated cars by type</h1>

        <div className="cardesignimg">
          <img src={car1} alt="" />
          <img src={car2} alt="" />
          <img src={car3} alt="" />
          <img src={car4} alt="" />
          <img src={car5} alt="" />
        </div>
      </div>
    </div>
  );
}
