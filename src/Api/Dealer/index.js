import ApiService from '../WrapCallApi';

const moduleName = 'dealer';
const list = (TableId) => {
  const api = {
    module: moduleName,
    type: 'list',
    params: {
      $sort: 'asc'
    }
  };
  if (TableId) {
    api.params.filters = [`tableId=${TableId}`];
  }
  return ApiService(api);
};
const create = (dealerName) => {
  const api = {
    module: moduleName,
    type: 'create',
    body: {
      name: dealerName.trim()
    }
  };
  return ApiService(api);
};
const  update = (data) => {
  const api = {
    module: moduleName,
    type: 'partialUpdate',
    body: data
  };
  return ApiService(api);
};
const isData = (data) => {
  const api = {
    module: moduleName,
    type: 'isDealerHasData',
    body: data
  };
  return ApiService(api);
};
const deleteDealer = (data) => {
  const api = {
    module: moduleName,
    type: 'deleteDealer',
    body: data
  };
  return ApiService(api);
};
export {create, deleteDealer, update, list, isData};
