import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as app} from "./app-state/app-state";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app
});
