import React from "react";

export default function List(props) {
  const fetchListData = () => {
    if (props.data) {
      return props.data.map((element, key) => {
        return (
          <div className="data-wrapper" key={key}>
            <div className="data-wrapper-left">{element[0]}</div>
            <div className="data-wrapper-right">{element[1]}</div>
          </div>
        );
      });
    }
  };
  return (
    <div className={props.nameClass}>
      <div className="total-result">
        Total <span style={{ color: props.highlightColor }}>{props.type}</span>{" "}
        case : {props.sum}
      </div>
      <div className="scroller" style={{ height: props.height }}>
        {fetchListData()}
      </div>
    </div>
  );
}
