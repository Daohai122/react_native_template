import { combineReducers } from "redux";
import TableReducers from "./Table";
import DealerReducers from "./Dealer";
import DataFillterReducers from "./DataFillter";

 const allReducers = combineReducers({
    TableReducers,
    DealerReducers,
    DataFillterReducers
 });
 export default allReducers;