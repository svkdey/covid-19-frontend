import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class BarGraph extends Component {
  lebelesAndData(list) {
    var labels = [];
    var data = [];
    list.forEach(element => {
      labels.push(element[0]);
      data.push(element[1]);
    });
    return { labels, data };
  }
  render() {
    var { labels, data } = this.lebelesAndData(this.props.data);
    var data = {
      labels: labels,
      datasets: [
        {
          label: this.props.label,
          backgroundColor: this.props.backgroundColor,
          borderColor: this.props.borderColor,
          borderWidth: 1,
          hoverBackgroundColor: this.props.hoverBackgroundColor,
          hoverBorderColor: this.props.hoverBorderColor,
          data: data
        }
      ]
    };
    return (
      <div className="graph">
        {/* <h5>Bar Example (custom size)</h5> */}
        <HorizontalBar data={data} height={260} />
      </div>
    );
  }
}

export default BarGraph;
