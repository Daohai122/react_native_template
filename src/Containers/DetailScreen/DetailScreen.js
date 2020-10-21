import React, {useEffect, useState} from 'react'
import { View, Text } from "react-native";
import { connect } from 'react-redux'
import styles from "./DetailScreenStyle";
import SelectTable from "../../Components/SelectTable";
import { fetchTableAction } from "../../Redux/Actions/Table";
function DetailScreen(props) {
    useEffect(() => {
      props.onFetchTable()
    },[])
    return (
        <View style={styles.container}>
           <SelectTable ListTable={props.ListTable}/>
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