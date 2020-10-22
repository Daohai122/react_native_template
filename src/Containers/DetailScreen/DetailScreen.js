import React, { useEffect, useState, useRef } from 'react'
import { View, Text } from "react-native";
import { connect } from 'react-redux'
import styles from "./DetailScreenStyle";
import SelectTable from "../../Components/SelectTable";
import { fetchTableAction } from "../../Redux/Actions/Table";
import ModalSelectTable from "../../Components/ModalSelectTable";
import { configTab } from "./ListMethod";
import TableExcel from "./Table/TableExcel";
function DetailScreen(props) {
  const [tableSlect, settableSlect] = useState({});
  const modalView = useRef();
  useEffect(() => {
    props.onFetchTable();
  }, []);

  function handleSelectTable(table) {
    settableSlect(table);
  }

  return (
    <View style={styles.container}>
      <SelectTable tableSlect={tableSlect} ListTable={configTab} toggleModal={modalView} handleSelectTable={handleSelectTable}/>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <TableExcel/>
      </View>
      <ModalSelectTable tableSlect={tableSlect} ref={modalView} ListTable={configTab} handleSelectTable={handleSelectTable}/>
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