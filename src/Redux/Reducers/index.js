import { combineReducers } from "redux";
import TableReducers from "./Table";
import DealerReducers from "./Dealer";
import DataFillterReducers from "./DataFillter";
import DataReloadAddNumber from "./AddNumber";

 const allReducers = combineReducers({
    TableReducers,
    DealerReducers,
    DataFillterReducers,
    DataReloadAddNumber
 });
 export default allReducers;