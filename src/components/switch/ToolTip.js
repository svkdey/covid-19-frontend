import React, { Component } from "react";

class ToolTip extends Component {
  render() {
    console.log(this.props);
    return (
      <div class="tooltiptext ">
        <div>
          Place :{this.props.deathData.state}
          {this.props.deathData.country && this.props.deathData.state
            ? ","
            : ""}
        </div>
        <div>{this.props.deathData.country}</div>
        <div>Confirm: {this.props.confirmData}</div>
        <div>Deaths: {this.props.deathData.latestTotal}</div>
        <div>Recovered: {this.props.recoverData}</div>
      </div>
    );
  }
}
export default ToolTip;
