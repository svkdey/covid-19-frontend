import axios from "axios";
// var url = process.env.REACT_APP_API_URL;
export function deathCases() {
  return async dispatch => {
    try {
      setDeathLoading();
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/http://covid19-dashboard-backend.herokuapp.com/corona-data-death"
      );
      dispatch({
        type: "DEATH_CASES",
        payload: res
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export const setDeathLoading = () => {
  return {
    type: "SET_DEATH_LOADING"
  };
};
export function confirmCases() {
  return async dispatch => {
    try {
      setConfirmLoading();
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://covid19-dashboard-backend.herokuapp.com/corona-data-confirm"
      );
      dispatch({
        type: "CONFIRM_CASES",
        payload: res
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export const setConfirmLoading = () => {
  return {
    type: "SET_CONFIRM_LOADING"
  };
};
export function recoveryCases() {
  return async dispatch => {
    try {
      setRecoveryLoading();
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/http://covid19-dashboard-backend.herokuapp.com/corona-data-recover"
      );
      dispatch({
        type: "RECOVERY_CASES",
        payload: res
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export const setRecoveryLoading = () => {
  return {
    type: "SET_RECOVERY_LOADING"
  };
};
