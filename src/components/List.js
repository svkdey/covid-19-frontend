import React from "react";
import Box from "./Box";
import { ListGroup, ListGroupItem } from "reactstrap";
export default function List(props) {
  const { confirm, death, recovery, confirmsum, deathsum, recoversum } = props;
  const createData = (confirm, recovery, death) => {
    var temp = [];
    for (var i in confirm) {
      var obj = {};
      obj["name"] = i;
      obj["confirm"] = confirm[i];
      obj["death"] = death[i];
      obj["recovery"] = recovery[i];
      temp.push(obj);
    }
    return temp;
    //  return res;
  };
  const fetchHeading = (confirmsum, deathsum, recoversum) => {
    return (
      <div className="list-heading">
        <Box type={"Confirmed"} nameClass={"confirmCls"} total={confirmsum} />
        <Box type={"Deaths"} nameClass={"deadCls"} total={deathsum} />
        <Box type={"Recoveries"} nameClass={"recoverdCls"} total={recoversum} />
      </div>
    );
  };
  const fetchList = data => {
    return (
      <ListGroup>
        {data.length > 0
          ? data.map((item, key) => {
              return (
                <ListGroupItem key={key}>
                  {/* {item.name} */}
                  <div className="listgroupItem-heading ">{item.name}</div>
                  <div className="listgroupItem">
                    <div className="listgroupItem-box">{item.confirm}</div>
                    <div className="listgroupItem-box">{item.death}</div>
                    <div className="listgroupItem-box">{item.recovery}</div>
                  </div>
                </ListGroupItem>
              );
            })
          : ""}
      </ListGroup>
    );
  };
  const data = createData(confirm, recovery, death);

  return (
    <div>
      <div>{fetchHeading(confirmsum, deathsum, recoversum)}</div>
      <div className="scroller" style={{ height: props.height }}>
        {fetchList(data.sort((a, b) => b.confirm - a.confirm))}
      </div>
    </div>
  );
}
