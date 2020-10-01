import mushroom from './Mushroom';

function toQueryString(obj, path) {
  if (obj === null || obj === undefined || typeof obj === 'function') return '';

  if (
    typeof obj === 'string' ||
    typeof obj === 'number' ||
    typeof obj === 'boolean'
  ) { return obj; }
  if (Array.isArray(obj)) {
 return obj
      .map(function(item) {
        return toQueryString(item, path);
      })
      .join(',');
}

  var arr = [];
  for (var m in obj) {
    if (!obj.hasOwnProperty(m)) continue;

    var key = (path || '') + m;
    arr.push(key + '=' + toQueryString(obj[m], key));
  }
  return arr.join('&');
}
mushroom.rouletteNumber.insertNumbersAsync = function(body, param) {
  // param.tab = '0';
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteNumbers.insertNumbers',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'insertNumbers'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteNumbers/insertNumbers?' + toQueryString(param)
  })(body);
};
mushroom.rouletteNumber.getNumbersAsync = function(body, param) {
  // param.tab = '0';
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteNumbers.getNumbers',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'getNumbers'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteNumbers/getNumbers?' + toQueryString(param)
  })(body);
};
mushroom.rouletteNumber.getHistoryLogAsync = function(body, param) {
  // param.tab = '0';
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteNumbers.getHistoryLog',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'getHistoryLog'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteNumbers/getHistoryLog?' + toQueryString(param)
  })(body);
};
mushroom.rouletteNumber.getHistoryAsync = function(body) {
  // param.tab = '0';
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteNumbers.getHistory',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'getHistory'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteNumbers/getHistory'
  })(body);
};

mushroom.rouletteNumber.updateHistoryAsync = function(body) {
  // body (id, ?resultNumber, ?dealerId)
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteNumbers.updateHistory',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'updateHistory'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteNumbers/updateHistory'
  })(body);
};
mushroom.rouletteNumber.deleteHistoryAsync = function(body) {
  // body [ids]
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteNumbers.deleteHistory',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'deleteHistory'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteNumbers/deleteHistory'
  })(body);
};
mushroom.rouletteNumber.deleteAllAsync = function(body) {
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteNumbers.deleteAll',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'deleteAll'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteNumbers/deleteAll'
  })(body);
};
mushroom.rouletteNumber.addHistoryAsync = function(body) {
  // body [ids]
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteNumbers.addHistory',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'addHistory'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteNumbers/addHistory'
  })(body);
};
mushroom.rouletteNumber.getDashboardAsync = function(body) {
  return mushroom.__createAsyncRestFunction({
      name: 'rouletteNumbers.getDashboard',
      method: 'POST',
      blankBody: false,
      headers: {
        'X-HTTP-Method-Override': 'getDashboard'
      },
      url: mushroom._fnGetRootApiUrl() + 'rouletteNumbers/getDashboard'
  })(body);
};
mushroom.rouletteNumber.searchAsync = function(body, params) {
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteNumbers.search',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'search'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteNumbers/search?' + toQueryString(params)
  })(body);
};

mushroom.rouletteTable.deleteTableAsync = function(body) {
  // body [ids]
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteTable.deleteTable',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'deleteTable'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteTables/deleteTable'
  })(body);
};

mushroom.dealer.deleteDealerAsync = function(body) {
  // body [ids]
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteTable.deleteDealer',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'deleteDealer'
    },
    url: mushroom._fnGetRootApiUrl() + 'dealers/deleteDealer'
  })(body);
};

mushroom.rouletteTable.isTableHasDataAsync = function(body) {
  // body [ids]
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteTable.isTableHasData',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'isTableHasData'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteTables/isTableHasData'
  })(body);
};

mushroom.dealer.isDealerHasDataAsync = function(body) {
  // body [ids]
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteTable.isDealerHasData',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'isDealerHasData'
    },
    url: mushroom._fnGetRootApiUrl() + 'dealers/isDealerHasData'
  })(body);
};

mushroom.rouletteNumber.statisticAsync = function(body) {
  // body (id, ?resultNumber, ?dealerId)
  return mushroom.__createAsyncRestFunction({
    name: 'rouletteNumbers.statistic',
    method: 'POST',
    blankBody: false,
    headers: {
      'X-HTTP-Method-Override': 'statistic'
    },
    url: mushroom._fnGetRootApiUrl() + 'rouletteNumbers/statistic'
  })(body);
};
export default mushroom;
