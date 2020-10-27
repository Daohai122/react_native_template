import React, { useEffect, useState, useRef } from 'react'
import { View, Text } from "react-native";
import { connect } from 'react-redux'
import styles from "./DetailScreenStyle";
import SelectTable from "../../Components/SelectTable";
import { fetchTableAction } from "../../Redux/Actions/Table";
import ModalSelectTable from "../../Components/ModalSelectTable";
import { configTab } from "./ListMethod";
import TableExcel from "./Table/TableExcel";
import RouletteNumberService from "../LiveScreen/LiveApi";

function DetailScreen(props) {
  const [TabSelect, setTabSelect] = useState(configTab[0]);
  const [dataTableRender, setDataTableRender] = useState(null);
  const modalView = useRef();
  useEffect(() => {
    props.onFetchTable();
  }, []);

  async function getListData() {
    try {
      const res = await RouletteNumberService.getNumbersAsync('5f6087597e6b4b144468c8d8', new Date(), 1, TabSelect.id);
      if(res && res.result && res.result.DetailData && res.result.DetailData.length > 0) {
        setDataTableRender(res.result);
      }
    } catch (error) {
      console.warn(error);
    }
  }

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
      <ModalSelectTable TabSelect={TabSelect} ref={modalView} ListTable={configTab} handleSelectTable={handleSelectTable}/>
    </View>
  )
}
const mapStateToProps = (state) => ({
  ListTable: state.TableReducers,
  ListUser: state.LoginReducers
})

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTable: () => {
      dispatch(fetchTableAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)