import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class Example extends PureComponent {
  createData = (confirm, recovery, death) => {
    var res = [];
    var temp = [];
    confirm.forEach(item => {
      var obj = {};
      recovery.forEach(recoveryData => {
        if (item[0] === recoveryData[0]) {
          obj["name"] = item[0];
          obj["confirmed"] = item[1];
          obj["recover"] = recoveryData[1];
        }
        death.forEach(deathData => {
          if (item[0] === deathData[0]) {
            obj["death"] = deathData[1];
          }
        });
      });

      temp.push(obj);
    });
    temp.forEach(item => {
      if (item.name !== undefined) {
        res.push(item);
      }
    });
    return res;
  };
  render() {
    var { confirm, recovery, death } = this.props;
    const data = this.createData(confirm, recovery, death);
    // console.log(data);
    return (
      <BarChart
        width={900}
        height={270}
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20
        }}
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="confirmed" stackId="a" fill="#8884d8" />
        <Bar dataKey="recover" stackId="a" fill="#82ca9d" />
        <Bar dataKey="death" stackId="a" fill="red" />
      </BarChart>
    );
  }
}
