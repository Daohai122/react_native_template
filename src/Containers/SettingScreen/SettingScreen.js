import React, {useState, useRef} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Header } from "../../Components/Header";
import styles from "./SettingScreenStyle";
import { Icon } from "native-base";
import moment from "moment";
import DatePicker from "../../Components/SelectPickerDate";
import { connect } from 'react-redux';
import { SelectComponent } from "../../Components/Select";

function SettingScreen(props) {
    const timePicker = useRef(null);
    const datePicker = useRef(null);
    const modalSelectTable = useRef(null);
    const modalSelectDealer = useRef(null);
    const [dataSetting, setDataSetting] = useState({
        table: '',
        tableName: null,
        dealerName: null,
        dealer: '',
        date: new Date(),
        time: new Date()
    });
    function getTime(time) {
        const data = {...dataSetting};
        data.time = time;
        setDataSetting(data);
    }

    function getDate(date) {
       const data = {...dataSetting};
       data.date = date;
       setDataSetting(data);
    }

    function handleChangeTable(res) {
        const data = {...dataSetting};
        data.tableName = res.name;
        data.table = res.id;
        setDataSetting(data);
    }

    function handleChangeDealer(res) {
        const data = {...dataSetting};
        data.dealerName = res.name;
        data.dealer = res.id;
        setDataSetting(data);
    }
    return (
        <View style={{ flex: 1 }}>
            <Header leftFunction={() => props.navigation.goBack()} IconLeft={{ name: "arrow-back", type: "Ionicons" }} title='Setting' />
            <View style={styles.container}>
                <View style={styles.wrapSelect}>
                    <Text style={styles.lableView}>Table</Text>
                    <TouchableOpacity style={styles.select} onPress={() => modalSelectTable && modalSelectTable.current.openModal()}>
                        <Text>{dataSetting.tableName?? 'Select Table'}</Text>
                        <Icon style={{ fontSize: 12, color: '#525354' }} name='caretdown' type='AntDesign' />
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapSelect}>
                    <Text style={styles.lableView}>Dealer</Text>
                    <TouchableOpacity style={styles.select} onPress={() => modalSelectDealer && modalSelectDealer.current.openModal()}>
                        <Text>{dataSetting.dealerName?? 'Select dealer'}</Text>
                        <Icon style={{ fontSize: 12, color: '#525354' }} name='caretdown' type='AntDesign' />
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapSelect}>
                    <Text style={styles.lableView}>Date</Text>
                    <TouchableOpacity style={styles.select} onPress={() => datePicker&&datePicker.current.showDatePicker()}>
                        <Text>{moment(dataSetting.date).format('DD/MM/YYY')}</Text>
                        <Icon style={{ fontSize: 20, color: '#525354' }} name='calendar' type='SimpleLineIcons' />
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapSelect}>
                    <Text style={styles.lableView}>Time</Text>
                    <TouchableOpacity onPress={() => timePicker&&timePicker.current.showDatePicker()} style={styles.select}>
                        <Text>{moment(dataSetting.time).format('HH:mm')}</Text>
                        <Icon style={{ fontSize: 20, color: '#525354' }} name='calendar' type='SimpleLineIcons' />
                    </TouchableOpacity>
                </View>
                <DatePicker mode='time' date={dataSetting.time} selectDate={getTime} ref={timePicker}/>
                <DatePicker date={dataSetting.time} selectDate={getDate} ref={datePicker}/>
                <SelectComponent ConfigSelect={{ id: 'id', label: 'name' }} ref={modalSelectTable} title="Select Table" data={props.ListTable} getItem={handleChangeTable} />
                <SelectComponent ConfigSelect={{ id: 'id', label: 'name' }} ref={modalSelectDealer} title="Select Dealer" data={props.ListDealer} getItem={handleChangeDealer} />
            </View>
        </View>
    )
}
const mapStateToProps = (state) => ({
    ListTable: state.TableReducers,
    ListDealer: state.DealerReducers
})
export default connect(mapStateToProps, null)(SettingScreen)
  