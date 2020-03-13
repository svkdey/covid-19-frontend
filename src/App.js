import React from "react";

import "./App.scss";
import { connect } from "react-redux";
import {
  deathCases,
  confirmCases,
  recoveryCases
} from "./actions/corona_data_actions";
import _ from "lodash";
import { isEmpty, groupByID } from "./utils";
import MapComponent from "./components/MapComponent";
import Header from "./components/partials/Header";
import List from "./components/List";
import BarGraph from "./components/BarGraph";
import Loading from "./components/Loading";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.props.dispatch(deathCases());
    this.props.dispatch(confirmCases());
    this.props.dispatch(recoveryCases());
    this.setState({ loading: false });
  }
  sumOfObject(obj) {
    var sum = 0;
    if (obj) {
      for (var i in obj) {
        sum += obj[i];
      }
    }
    return sum;
  }
  render() {
    var deathData = this.props;
    var groupByconfirmCase = groupByID(this.props.confirm);
    var groupBydeathCase = groupByID(this.props.death);
    var groupByrecoveryCase = groupByID(this.props.recovery);
    if (this.state.loading)
      return (
        <div>
          <Loading type="Bars" color="red" />;<h1>Loading</h1>
        </div>
      );
    else {
      return (
        <div>
          <div>
            <Header />
          </div>
          <div className="container">
            <div className="left-20">
              <List
                type={"Comfirmed"}
                data={Object.entries(groupByconfirmCase).sort(
                  (a, b) => b[1] - a[1]
                )}
                sum={this.sumOfObject(groupByconfirmCase)}
                height="82vh"
                highlightColor={"blue"}
              />
            </div>
            <div className="mid-60">
              <div className="upper-60">
                <MapComponent data={deathData} />
              </div>
              <div className="lower-40">
                <BarGraph
                  type={"bar"}
                  data={Object.entries(groupByconfirmCase)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 10)}
                  label="Confirm Cases"
                  backgroundColor="rgba(15, 0, 186,1)"
                  borderColor="rgba(15, 0, 186,1)"
                  hoverBackgroundColor="rgba(15, 0, 186,1)"
                  hoverBorderColor="rgba(15, 0, 186,1)"
                />
                <BarGraph
                  type={"bar"}
                  data={Object.entries(groupBydeathCase)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 15)}
                  label="Death Cases"
                  backgroundColor="rgba(186, 0, 0,1)"
                  borderColor="rgba(186, 0, 0,1)"
                  hoverBackgroundColor="rgba(186, 0, 0,1)"
                  hoverBorderColor="rgba(186, 0, 0,1)"
                />
                <BarGraph
                  type={"bar"}
                  data={Object.entries(groupByrecoveryCase)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 15)}
                  label="Recovered Cases"
                  backgroundColor="rgba(54, 204, 51,1)"
                  borderColor="rgba(54, 204, 51,1)"
                  hoverBackgroundColor="rgba(54, 204, 51,0.4)"
                  hoverBorderColor="rgba(54, 204, 51,1)"
                />
                {/* <BarGraph type={"line"} /> */}
              </div>
            </div>
            <div className="right-20">
              <List
                type={"Death"}
                data={Object.entries(groupBydeathCase).sort(
                  (a, b) => b[1] - a[1]
                )}
                sum={this.sumOfObject(groupBydeathCase)}
                height="36vh"
                highlightColor={"red"}
              />
              <List
                type={"Recovered"}
                data={Object.entries(groupByrecoveryCase).sort(
                  (a, b) => b[1] - a[1]
                )}
                sum={this.sumOfObject(groupByrecoveryCase)}
                height="36vh"
                highlightColor={"green"}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    death: state.coronaData.death,
    confirm: state.coronaData.confirm,
    recovery: state.coronaData.recovery
  };
};
export default connect(mapStateToProps)(App);
