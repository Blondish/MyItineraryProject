import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import loginReducer from "./loginReducer";
const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itineraryReducer,
  activities: activityReducer,
  users: loginReducer
});

export default rootReducer;
