import React from "react";
// import SwitchComponent from "../switch/Switch";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-container-left">COVID-19 Dashboard</div>
      <div className="header-container-right">
        <a href="https://github.com/svkdey/covid-19-frontend">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
