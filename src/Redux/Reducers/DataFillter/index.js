import { UPDATE_DATAFILLTER } from "../../Actions/DataFillter/Action";
  
  const DataFillterReducers = (DataFillter = {}, action) => {
    switch (action.type) {
      case UPDATE_DATAFILLTER:
        return action.payload;
      default:
        return DataFillter;
    }
  };
  export default DataFillterReducers;
  