const initialCoronaData = {
  deathLoading: true,
  confirmLoading: true,
  recoveryLoading: true
};
export default function(state = initialCoronaData, action) {
  // console.log(action);
  switch (action.type) {
    case "DEATH_CASES":
      return { ...state, death: action.payload.data, deathLoading: false };
    case "CONFIRM_CASES":
      return { ...state, confirm: action.payload.data, confirmLoading: false };
    case "RECOVERY_CASES":
      return {
        ...state,
        recovery: action.payload.data,
        recoveryLoading: false
      };
    case "SET_DEATH_LOADING":
      return {
        ...state,
        deathLoading: true
      };
    case "SET_CONFIRM_LOADING":
      return {
        ...state,
        confirmLoading: true
      };
    case "SET_RECOVERY_LOADING":
      return {
        ...state,
        recoveryLoading: true
      };
    // case "TIMELINE":
    //   return { ...state, timeline: action.payload };
    // case "DEATHREPORT":
    //   return { ...state, deathReport: action.payload };
    default:
      return state;
  }
}
