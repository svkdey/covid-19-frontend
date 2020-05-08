import React from "react";

export default function Box(props) {
  return (
    <div className="box">
      <div className={props.nameClass}>{props.total}</div>
      <div className="type">{props.type}</div>
    </div>
  );
}
