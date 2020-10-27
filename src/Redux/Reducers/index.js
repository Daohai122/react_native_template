import { combineReducers } from "redux";
import TableReducers from "./Table";
import DealerReducers from "./Dealer";

 const allReducers = combineReducers({
    TableReducers,
    DealerReducers
     // them reducer vao day
 });
 export default allReducers;