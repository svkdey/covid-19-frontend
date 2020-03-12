import axios from "axios";
export function deathCases() {
  var request = axios
    .get("/corona-data-death")
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
    .get("/corona-data-confirm")
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
    .get("/corona-data-recovery")
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
