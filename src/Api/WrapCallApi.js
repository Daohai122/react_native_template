
import mushroom from './CustomMushroom';
import { ShowMessage } from "../Components/Message";
const ApiService = objData => {
  return mushroom[objData.module][objData.type + 'Async'](objData.body, objData.params)
    .then(response => {
      return response;
    })
    .catch(error => {
      if (error.detail === 'Violate unique key constraint') {
        ShowMessage('The name "' + objData.body.name + '" already exists!', 'danger');
      }
      throw (error);
    });
};
// vd
// moduleApi.chiTiet = (cardCode) => {
//     let api = {
//       module: "ho_so_831",
//       type: "get_ho_so_831",
//       params: {
//         maDangKy: cardCode
//       }
//     };
//     return ApiService(api);
//   };
export default ApiService;
