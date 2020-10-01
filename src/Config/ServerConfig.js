const environment = 'dev';

const ApiDev = 'http://backtest-api-v2.demo.siten.vn/api/v1/';
const apiProd = 'https://inv-api.upriseventures.vn/api/v1/';
const LinkApi = environment == 'dev' ? ApiDev : apiProd
export default LinkApi;
