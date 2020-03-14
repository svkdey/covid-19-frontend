import React from "react";
import ReactLoading from "react-loading";

const Laoding = props => {
  return <ReactLoading type={props.type} color={props.color} />;
};

export default Laoding;
