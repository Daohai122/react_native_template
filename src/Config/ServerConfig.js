const environment = 'dev';

const ApiDev = 'http://localhost:3000/';
const apiProd = 'Prod.com/api';
const LinkApi = environment == 'dev' ? ApiDev : apiProd
export default LinkApi;
