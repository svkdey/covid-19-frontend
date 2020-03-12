import React from "react";

import "./App.scss";
import { connect } from "react-redux";
import {
  deathCases,
  confirmCases,
  recoveryCases
} from "./actions/corona_data_actions";
import _ from "lodash";
import { isEmpty } from "./utils";
import MapComponent from "./components/MapComponent";
import Header from "./components/partials/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(deathCases());
    this.props.dispatch(confirmCases());
    this.props.dispatch(recoveryCases());
  }

  render() {
    var deathData = this.props;
    console.log(deathData);
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="container">
          <div className="left-20"></div>
          <div className="mid-60">
            <div className="upper-60">
              <MapComponent data={deathData} />
            </div>
            <div className="lower-40"></div>
          </div>
          <div className="right-20"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    death: state.coronaData.death,
    confirm: state.coronaData.confirm,
    recovery: state.coronaData.recovery
  };
};
export default connect(mapStateToProps)(App);
