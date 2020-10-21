import ApiService from '../WrapCallApi';

const moduleName = 'rouletteTable';
const list = () => {
  const api = {
    module: moduleName,
    type: 'list'
  };
  return ApiService(api);
};
const create = (rouletteTableName) => {
  const api = {
    module: moduleName,
    type: 'create',
    body: {
      name: rouletteTableName.trim()
    }
  };
  return ApiService(api);
};
const update = (data) => {
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
    type: 'isTableHasData',
    body: data
  };
  return ApiService(api);
};
const deleteTable = (data) => {
  const api = {
    module: moduleName,
    type: 'deleteTable',
    body: data
  };
  return ApiService(api);
};
export {list, create, update, isData, deleteTable};
