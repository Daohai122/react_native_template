import ApiService from '../../Api/WrapCallApi';
const RouletteNumberService = {};

RouletteNumberService.insertNumbersAsync = (dealerId, tableId, number, dateTimeInput) => {
  const api = {
    module: 'rouletteNumber',
    type: 'insertNumbers',
    body: {
      dealerId: dealerId,
      tableId: tableId,
      resultNumbers: number,
      dateTimeInput: dateTimeInput
    }
  };
  return ApiService(api);
};
RouletteNumberService.getNumbersAsync = (tableId, date, screen, tab) => {
  const api = {
    module: 'rouletteNumber',
    type: 'getNumbers',
    params: {
      screen: screen
    },
    body: {
      tableId: tableId,
      dateTimeInput: date
    }
  };
  if (tab !== undefined) {
    api.params.method = tab;
  }
  return ApiService(api);
};
RouletteNumberService.getDashboardAsync = (body) => {
  const api = {
    module: 'rouletteNumber',
    type: 'getDashboard',
    body: body
  };
  return ApiService(api);
};
RouletteNumberService.search = (dealerId, tableId, resultNumbers, dateTimeInput, searchDate, type) => {
  const body = {
    tableId: tableId,
    dateTimeInput: dateTimeInput,
    searchDate: searchDate
  };
  if (type === 1) {
    body.searchNumber = resultNumbers;
  }
  if (type === 0) {
    body.searchNumber = resultNumbers;
  }
  if (dealerId) {
    body.dealerId = dealerId;
  } else {
    body.dealerId = null;
  }
  const api = {
    module: 'rouletteNumber',
    type: 'search',
    body: body,
    params: {
      type: type
    }
  };
  return ApiService(api);
};
RouletteNumberService.getHistoryLog = (body, params) => {
  const api = {
    module: 'rouletteNumber',
    type: 'getHistoryLog',
    body: body,
    params: params
  };
  return ApiService(api);
};
export default RouletteNumberService;
