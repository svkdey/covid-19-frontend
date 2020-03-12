import React from "react";
import SwitchComponent from "../switch/Switch";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-container-left">COVID-19 Dashboard</div>
      <div className="header-container-right">
        <SwitchComponent />
      </div>
    </div>
  );
}
