
const configTab = [
    {
      id: 'data',
      name: 'Data',
      type: 'Nei'
    }
  ];
  const ArrayU200 = [];
  const ArrayNei = [];
  function renderNei() {
    for (let i = 0; i <= 12; i++) {
      ArrayNei.push('nei' + i);
      configTab.push({
        id: 'nei' + i,
        name: 'Nei' + i,
        type: 'Nei'
      });
    }
  }
  function renderU200() {
    for (let i = 1; i <= 9; i++) {
      ArrayU200.push('u200Nei' + i);
      configTab.push({
        id: 'u200Nei' + i,
        name: 'U200 N' + i,
        type: 'Nei'
      });
    }
  }
  renderNei();
  renderU200();
  export {configTab, ArrayNei, ArrayU200};
  