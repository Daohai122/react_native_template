import { ADD_NUMBER } from "../../Actions/Addnumber/Action";

const DataReloadAddNumber = (addNumber = 0, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return addNumber + 1;
    default:
      return addNumber;
  }
};
export default DataReloadAddNumber;
