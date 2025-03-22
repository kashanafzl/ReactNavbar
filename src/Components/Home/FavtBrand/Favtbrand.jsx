import React from "react";
import "./Favtbrand.css";

import toyotaimg from "../../../Assets/img/toyota.svg";
import bmwimg from "../../../Assets/img/bmw.svg";
import chwimg from "../../../Assets/img/chew.svg";
import hondaimg from "../../../Assets/img/honda.svg";
import fordimg from "../../../Assets/img/ford.svg";
import audiimg from "../../../Assets/img/audi.svg";
import acimg from "../../../Assets/img/auqa.svg";
import auqaimg from "../../../Assets/img/hyndia.svg";
import mercedesimg from "../../../Assets/img/mercedes.svg";

export default function Favtbrand() {
  return (
    <div>
      <div className="bgfavtbrand">
        <div>
          <h1>Shop your favourite brand</h1>
        </div>

        <div className="carbrandflexdiv">
          <div className="carandnamediv">
            <img src={toyotaimg} alt="" />
            <p>Toyota</p>
          </div>
          <div className="carandnamediv">
            <img src={bmwimg} alt="" />
            <p>BMW</p>
          </div>
          <div className="carandnamediv">
            <img src={chwimg} alt="" />
            <p>Chevrolet</p>
          </div>
        </div>


        <div className="carbrandflexdiv">
          <div className="carandnamediv">
            <img src={hondaimg} alt="" />
            <p>Honda</p>
          </div>
          <div className="carandnamediv">
            <img src={fordimg} alt="" />
            <p>Ford</p>
          </div>
          <div className="carandnamediv">
            <img src={audiimg} alt="" />
            <p>Audi</p>
          </div>
        </div>


        <div className="carbrandflexdiv">
          <div className="carandnamediv">
            <img src={acimg} alt="" />
            <p>Acura</p>
          </div>
          <div className="carandnamediv">
            <img src={auqaimg} alt="" />
            <p>Hyundai</p>
          </div>
          <div className="carandnamediv">
            <img src={mercedesimg} alt="" />
            <p>Mercedes-Benz</p>
          </div>
        </div>

      </div>
    </div>
  );
}
