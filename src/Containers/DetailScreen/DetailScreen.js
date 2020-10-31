import React, { useEffect, useState, useRef } from 'react'
import { View, Text } from "react-native";
import { connect } from 'react-redux'
import styles from "./DetailScreenStyle";
import SelectTable from "../../Components/SelectTable";
import ModalSelectTable from "../../Components/ModalSelectTable";
import { configTab } from "./ListMethod";
import TableExcel from "./Table/TableExcel";
import RouletteNumberService from "../LiveScreen/LiveApi";

function DetailScreen(props) {
  console.warn('props.ReloadData', props.ReloadData);
  const [TabSelect, setTabSelect] = useState(configTab[0]);
  const [dataTableRender, setDataTableRender] = useState(null);
  const modalView = useRef();
  async function getListData() {
    try {
      const res = await RouletteNumberService.getNumbersAsync(props.DataSetting.table, new Date(), 1, TabSelect.id);
      if(res && res.result && res.result.DetailData && res.result.DetailData.length > 0) {
        setDataTableRender(res.result);
      }
    } catch (error) {
      console.warn(error);
    }
  }
  // get table when tableid change
  useEffect(() => {
    getListData();
  }, [props.DataSetting.table]);

  // get table when method change
  useEffect(() => {
    getListData();
  }, [TabSelect]);

  // get table when inputnumber change
  useEffect(() => {
    if(props.ReloadData >0){
      getListData();
    };
  }, [props.ReloadData]);

  function handleSelectTable(tab) {
    setTabSelect(tab);
  }

  return (
    <View style={styles.container}>
      <SelectTable TabSelect={TabSelect} ListTable={configTab} toggleModal={modalView} handleSelectTable={handleSelectTable}/>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <TableExcel dataRender={dataTableRender} tabActive={TabSelect}/>
      </View>
      <ModalSelectTable TabSelect={TabSelect} ref={modalView} ListTable={configTab} handleSelectTable={handleSelectTable}/>
    </View>
  )
}
const mapStateToProps = (state) => ({
  DataSetting: state.DataFillterReducers,
  ReloadData: state.DataReloadAddNumber
})

export default connect(mapStateToProps, null)(DetailScreen)