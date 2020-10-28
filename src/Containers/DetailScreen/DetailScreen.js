import React, { useEffect, useState, useRef } from 'react'
import { View, Text } from "react-native";
import { connect } from 'react-redux'
import styles from "./DetailScreenStyle";
import SelectTable from "../../Components/SelectTable";

import ModalSelectTable from "../../Components/ModalSelectTable";
import { configTab } from "./ListMethod";
import TableExcel from "./Table/TableExcel";
import RouletteNumberService from "../LiveScreen/LiveApi";
import InputNumber from "../../Components/inputNumber";

function DetailScreen(props) {
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

  useEffect(() => {
    getListData();
  }, [props.DataSetting.table]);

  useEffect(() => {
    getListData()
  }, [TabSelect])

  function handleSelectTable(tab) {
    setTabSelect(tab);
  }

  return (
    <View style={styles.container}>
      <SelectTable TabSelect={TabSelect} ListTable={configTab} toggleModal={modalView} handleSelectTable={handleSelectTable}/>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <TableExcel dataRender={dataTableRender} tabActive={TabSelect}/>
      </View>
      <InputNumber dataSetting= {props.DataSetting}/>
      <ModalSelectTable TabSelect={TabSelect} ref={modalView} ListTable={configTab} handleSelectTable={handleSelectTable}/>
    </View>
  )
}
const mapStateToProps = (state) => ({
  DataSetting: state.DataFillterReducers,
})

export default connect(mapStateToProps, null)(DetailScreen)