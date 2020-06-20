import React from "react";
import ReactLoading from "react-loading";

const Laoding = ({ type = "bubbles", color = "white" }) => (
  <div className="loading">
    <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />
  </div>
);

export default Laoding;
