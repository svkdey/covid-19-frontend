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
import BarGraphComponent from "./components/BarGraphComponent";
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
          <Loading type="Bars" color="red" />
          <h1>Loading</h1>
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
                nameClass="h-2"
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
                <BarGraphComponent
                  confirm={Object.entries(groupByconfirmCase)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 10)}
                  death={Object.entries(groupBydeathCase)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 15)}
                  recovery={Object.entries(groupByrecoveryCase)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 15)}
                />
              </div>
            </div>
            <div className="right-20">
              <List
                nameClass="h-1"
                type={"Death"}
                data={Object.entries(groupBydeathCase).sort(
                  (a, b) => b[1] - a[1]
                )}
                sum={this.sumOfObject(groupBydeathCase)}
                height="36vh"
                highlightColor={"red"}
              />
              <List
                nameClass="h-1"
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
