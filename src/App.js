import React from "react";

import "./App.scss";
import { connect } from "react-redux";
import {
  deathCases,
  confirmCases,
  recoveryCases
} from "./actions/corona_data_actions";
import { fetchNews } from "./actions/news";
import _ from "lodash";
import { isEmpty, groupByID } from "./utils";
import Header from "./components/partials/Header";
import List from "./components/List";
import BarGraphComponent from "./components/BarGraphComponent";
import Loading from "./components/Loading";
import MapGraph from "./components/MapGraph";
import ListOfCard from "./components/ListOfCard";
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
    this.props.dispatch(fetchNews());
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
    var news = this.props.news.news;
    var deathData = this.props;
    var groupByconfirmCase = groupByID(this.props.confirm);
    var groupBydeathCase = groupByID(this.props.death);
    var groupByrecoveryCase = groupByID(this.props.recovery);
    console.log(news);
    if (this.state.loading)
      return (
        <div>
          <Loading type="Bars" color="red" />
          <h1>Loading</h1>
        </div>
      );
    else {
      // <SimpleExample />;
      return (
        <div>
          <div>
            <Header />
          </div>
          <div className="main-container">
            <div className="left-20">
              <List
                nameClass="h-2"
                type={"Comfirmed"}
                confirm={groupByconfirmCase}
                confirmsum={this.sumOfObject(groupByconfirmCase)}
                type={"Death"}
                death={groupBydeathCase}
                deathsum={this.sumOfObject(groupBydeathCase)}
                recovery={groupByrecoveryCase}
                recoversum={this.sumOfObject(groupByrecoveryCase)}
                height="82vh"
                highlightColor={"blue"}
              />
            </div>
            <div className="mid-60">
              <div className="upper-60">
                <MapGraph data={deathData} />
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
              <ListOfCard news={news} height="85vh" />
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
    recovery: state.coronaData.recovery,
    news: state.news
  };
};
export default connect(mapStateToProps)(App);
