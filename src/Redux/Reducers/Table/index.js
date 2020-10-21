import {
    FETCH_TABLE,
    FETCH_TABLE_SUCCSES,
    FETCH_TABLE_FAILED,
  } from "../../Actions/Table/Action";
  
  const TableReducers = (ListTable = [], action) => {
    switch (action.type) {
      case FETCH_TABLE_SUCCSES:
        return action.table;
      case FETCH_TABLE_FAILED:
        return [];
      default:
        return ListTable;
    }
  };
  export default TableReducers;
  