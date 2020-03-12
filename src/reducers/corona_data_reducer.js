const initialCoronaData = {};
export default function(state = initialCoronaData, action) {
  // console.log(action);
  switch (action.type) {
    case "DEATH_CASES":
      return { ...state, death: action.payload };
    case "CONFIRM_CASES":
      return { ...state, confirm: action.payload };
    case "RECOVERY_CASES":
      return { ...state, recovery: action.payload };
    // case "TIMELINE":
    //   return { ...state, timeline: action.payload };
    // case "DEATHREPORT":
    //   return { ...state, deathReport: action.payload };
    default:
      return state;
  }
}
