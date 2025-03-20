import React, { useState } from "react";
import "./Navbar.css";

import logo from "../../../Assets/img/logo.svg";

import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  let clickthemenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="mainnavbardiv">
        <div className="logodiv">
          <img src={logo} alt="" />
        </div>

        <div>
          <ul className="uflex">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Buy a car</a>
            </li>
            <li>
              <a href="/">Sell a car</a>
            </li>
            <li>
              <a href="/">Rent a car</a>
            </li>
          </ul>
        </div>

        <div className="loginbtndiv">
          <button>Login</button>
        </div>

        <button onClick={clickthemenu} className="menu">
          <CiMenuBurger />
        </button>

        <div className={`sidebar  ${open ? "sidebar-active" : "sidebar"} `}>
          <button className="closebtn" onClick={clickthemenu}>
            <IoClose />
          </button>
          {/* <p>Lorem, ipsum.</p> */}
          <ul className="uflex2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Buy a car</a>
            </li>
            <li>
              <a href="/">Sell a car</a>
            </li>
            <li>
              <a href="/">Rent a car</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
