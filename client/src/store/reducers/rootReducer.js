import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import commentReducer from "./commentReducer";
import loginLogoutReducer from "./loginLogoutReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import favouritesReducer from "./favouritesReducer";
const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itineraryReducer,
  activities: activityReducer,
  comments: commentReducer,
  users: loginLogoutReducer,
  favourites: favouritesReducer,
  error: errorReducer,
  auth: authReducer
});

export default rootReducer;
