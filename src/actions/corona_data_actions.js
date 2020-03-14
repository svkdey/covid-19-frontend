import axios from "axios";
var url = process.env.REACT_APP_API_URL;
export function deathCases() {
  console.log(url);
  var request = axios
    .get(
      "https://cors-anywhere.herokuapp.com/http://covid19-dashboard-backend.herokuapp.com/corona-data-death"
    )
    .then(res => {
      // console.log(res);
      // var groupedData = groupBy(res.data, data => data.country);
      // console.log(groupedData);
      return res.data;
    })
    .catch(err => console.log(err));
  return {
    type: "DEATH_CASES",
    payload: request
  };
}
export function confirmCases() {
  var request = axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://covid19-dashboard-backend.herokuapp.com/corona-data-confirm"
    )
    .then(res => {
      // console.log(res);
      // var groupedData = groupBy(res.data, data => data.country);
      // console.log(groupedData);
      return res.data;
    })
    .catch(err => console.log(err));
  return {
    type: "CONFIRM_CASES",
    payload: request
  };
}
export function recoveryCases() {
  var request = axios
    .get(
      "https://cors-anywhere.herokuapp.com/http://covid19-dashboard-backend.herokuapp.com/corona-data-recover"
    )
    .then(res => {
      // console.log(res);
      // var groupedData = groupBy(res.data, data => data.country);
      // console.log(groupedData);
      return res.data;
    })
    .catch(err => console.log(err));
  return {
    type: "RECOVERY_CASES",
    payload: request
  };
}
