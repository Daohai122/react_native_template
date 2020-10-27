
const methodsIsPending = ['OPL', 'VDZL', 'TDCL', 'Jou0L', 'OPLR'];
import { ArrayU200, } from "../ListMethod";
function getMax(dataMax) {
  const max = ['', ''];
  dataMax.forEach((e, i) => {
    max.push(e.Max);
  });
  return max;
};
function convertDataRes(dataRes, dataMax) {
  const header = ['No', ''];
  const max = getMax(dataMax);
  const data = [];
  dataRes.forEach((e, index) => {
    const itemInData = [index + 1, e.ResultNumber];
    e.Details.forEach((i, indexChild) => {
      if (index === 0) {
        header.push(i.Key);
      }
      itemInData.push(isEmptyValue(i) ? '' : i.Value.Values.count);
    });
    data.push(itemInData);
  });
  data.splice(0, 0, max);
  data.splice(0, 0, header);
  return data;
};
function convertDataForU(dataRes, dataMax) {
  const header = ['No', ''];
  const max = this.getMax(dataMax);
  const data = [];
  const headerForU = [];
  // let isEmptyValue = true;
  // dataRes.forEach((e) => {
  //   if (e.Values && Object.keys(e.Values).length) {
  //     isEmptyValue = false;
  //   }
  // });
  // if (isEmptyValue) {
  //   return [];
  // }
  // lay header day du
  dataRes.forEach((e, index) => {
    for (const key in e.Values) {
      if (headerForU.indexOf(key) === -1) {
        headerForU.push(key);
      }
    }
  });
  headerForU.sort((a, b) => a - b);
  // lay data
  dataRes.forEach((e, index) => {
    const itemInData = [index + 1, e.ResultNumber];
    headerForU.forEach((i, indexChild) => {
      if (index === 0) {
        header.push(i);
      }
      if (!max[indexChild + 2]) {
        max[indexChild + 2] = e.Values[i] ?? 0;
      } else {
        if (e.Values[i] && max[indexChild + 2] < e.Values[i]) {
          max[indexChild + 2] = e.Values[i];
        }
      }
      itemInData.push((e.Values[i] === undefined || e.Values[i] === 0) ? '' : e.Values[i]);
    });
    data.push(itemInData);
  });
  data.splice(0, 0, max);
  data.splice(0, 0, header);
  // return headerForU.length > 0 ? data : [];
  return data;
}
function isEmptyValue(element) {
  if (methodsIsPending.includes(element.Key)) {
    return element.Value.Values.count === undefined || element.Value.Values.count === -1 || element.Value.Values.isPending === 1;
  } else return !element.Value.Values.count || element.Value.Values.count === -1;
}
export default ConverData = (dataGoc, type) => {
  let dataArray = [];
  if (type.id === 'data') {
    dataArray = convertDataRes(dataGoc.DetailData, dataGoc.MaxData);
  } else if (ArrayU200.indexOf(type.id) !== -1) {
    dataArray = convertDataForU(dataGoc.DetailData, dataGoc.MaxData);
  } else {
    const header = ['No', ''];
    const max = getMax(dataGoc.MaxData);
    const data = [];
    const dataHeaderForU = [];
    for (let i = 0; i <= 36; i++) {
      dataHeaderForU.push(i);
    }
    dataGoc.DetailData.forEach((e, index) => {
      const itemInData = [index + 1, e.ResultNumber];
      dataHeaderForU.forEach(i => {
        if (index === 0) {
          header.push(i);
        }
        if (!max[i + 2]) {
          max[i + 2] = e.Values[i] ?? 0;
        } else {
          if (e.Values[i] && max[i + 2] < e.Values[i]) {
            max[i + 2] = e.Values[i];
          }
        }
        itemInData.push((e.Values[i] === undefined || e.Values[i] === 0) ? '' : e.Values[i]);
      });
      data.push(itemInData);
    });
    data.splice(0, 0, max);
    data.splice(0, 0, header);
    dataArray = data;
  }
  return dataArray;
}