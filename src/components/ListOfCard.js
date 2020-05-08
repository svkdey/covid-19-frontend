import React from "react";
import CustomCard from "./Card";

export default function ListOfCard(props) {
  const fetchCards = news => {
    return news !== undefined && news.length > 0
      ? news.map((item, key) => {
          return <CustomCard data={item} key={key} />;
        })
      : "";
  };
  return (
    <div className="scroller-fix mobile-fix" style={{ height: props.height }}>
      {fetchCards(props.news)}
    </div>
  );
}
