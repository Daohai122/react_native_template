import React, { useState, useEffect, useRef } from 'react'
import { View, Text, FlatList } from "react-native";
import NumberColor from "./NumberColor";
import styles from "./HistoryScreenStyle";
import { Icon } from "native-base";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import moment from "moment";
import DatePicker from "../../Components/SelectPickerDate";
import { SelectComponent } from "../../Components/Select";
import RouletteNumberService from "../LiveScreen/LiveApi";
import { ShowMessage } from "../../Components/Message";

function convertData(data, listTable) {
    const dataConvert = [];
    data.map(e => {
        const findTable = listTable.find(item => item.id == e.TableId);
        e.nameTable = findTable ? findTable.name : '';
        const findData = dataConvert.find(item => moment(item.date).format('DD/MM/YYYY') == moment(e.DateTimeInput).format('DD/MM/YYYY'));
        if (findData) {
            const i = dataConvert.findIndex(item => item.id == e.id);
            dataConvert[i].items.push(e);
        } else {
            dataConvert.push({
                date: e.DateTimeInput,
                items: [e]
            })
        }
    });
    return dataConvert;
}

function HistoryScreen(props) {
    const modalSelectTable = useRef(null);
    const startDateSelect = useRef(null);
    const endateDateSelect = useRef(null);

    const [listHistory, setListHistory] = useState([]);

    const [nameTable, setNameTable] = useState('');

    const [Search, setSearch] = useState(() => {
        let obj = {
            tableId: '',
            fromDate: new Date(),
            toDate: new Date()
        }
        return obj;
    });

    useEffect(() => {
        if (props.ListTable && props.ListTable[0]) {
            getHisTory();
        }
    }, [props.ListTable])

    useEffect(() => {
        getHisTory();
    }, [Search])

    async function getHisTory() {
        try {
            const res = await RouletteNumberService.getHistoryLog(Search, { limit: 50, offset: 0 });
            if (res && res.result && res.result.data && res.result.data.length > 0) {
                const data = convertData(res.result.data, props.ListTable);
                setListHistory(data);
            } else {
                setListHistory([]);
            }
        } catch (error) {
            console.warn(error)
        }
        
    }

    function getDateStart(date) {
        if(moment(date).valueOf() > moment(Search.toDate).valueOf()) {
            ShowMessage('Error from date > to date!', 'warning');
            return;
        }
        let data = { ...Search };
        data.fromDate = date;
        setSearch(data)
    }

    function getDateEnd(date) {
        if(moment(date).valueOf() < moment(Search.fromDate).valueOf()) {
            ShowMessage('Error from date > to date!', 'warning');
            return;
        }
        let data = { ...Search };
        data.toDate = date;
        setSearch(data)
    }

    function handleChangeTable(item) {
        let data = { ...Search };
        setNameTable(item.name);
        data.tableId = item.id;
        setSearch(data);
    }

    const renderItem = (i) => {
        return (
        <View>
            <View style={styles.headerItem}>
                <Text>{moment(i.item.date).format('DD/MM/YYYY')}</Text>
            </View>
            <View>
                {i.item.items.map((e, index) => {
                    return (
                        <View key={index} style={[styles.ItemContent, { borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5 }]}>
                            <View style={styles.boxItemElementNo}>
                                <Text style={[styles.textNumber, { color: NumberColor[e.ResultNumber] }]}>{e.ResultNumber}</Text>
                            </View>
                            <View style={styles.boxItemElement}>
                                <Text>{moment(e.DateTimeInput).format('HH:mm')}</Text>
                            </View>
                            <View style={styles.boxItemElement}>
                                <Text>wep</Text>
                            </View>
                            <View style={styles.boxItemElement}>
                                <Text>{e.nameTable}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )};
    return (

        <View style={styles.container}>
            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <View style={styles.wrapSelectDate}>
                    <View style={styles.labelView}>
                        <Text>From</Text>
                    </View>
                    <TouchableOpacity style={styles.selectDate} onPress={() => startDateSelect.current.showDatePicker()}>
                        <Text>{moment(Search.fromDate).format('DD/MM/YYYY')}</Text>
                        <Icon style={{ fontSize: 20, color: '#525354' }} name='calendar' type='SimpleLineIcons' />
                    </TouchableOpacity>
                </View>
                <View style={[styles.wrapSelectDate, { marginTop: 10 }]}>
                    <View style={styles.labelView}>
                        <Text>To</Text>
                    </View>
                    <TouchableOpacity style={styles.selectDate} onPress={() => endateDateSelect.current.showDatePicker()}>
                        <Text>{moment(Search.toDate).format('DD/MM/YYYY')}</Text>
                        <Icon style={{ fontSize: 20, color: '#525354' }} name='calendar' type='SimpleLineIcons' />
                    </TouchableOpacity>
                </View>
                <View style={[styles.wrapSelectDate, { marginTop: 10 }]}>
                    <View style={styles.labelView}>
                        <Text>Table</Text>
                    </View>
                    <TouchableOpacity style={styles.selectDate} onPress={() => modalSelectTable.current.openModal()}>
                        <Text>{nameTable ? nameTable : 'Select Table'}</Text>
                        <Icon style={{ fontSize: 12, color: '#525354' }} name='caretdown' type='AntDesign' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Content}>
                <View style={styles.headerlist}>
                    <View style={styles.boxItemElementNo}>
                        <Text style={styles.TextHeadeList}>No</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text style={styles.TextHeadeList}>Time</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text style={styles.TextHeadeList}>Dealer</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text style={styles.TextHeadeList}>Table</Text>
                    </View>
                </View>
                <View style={styles.Content}>
                    <FlatList
                        data={listHistory}
                        keyExtractor={e => e.date + Math.random()}
                        renderItem={renderItem}
                    />
                </View>
            </View>
            <SelectComponent ConfigSelect={{ id: 'id', label: 'name' }} ref={modalSelectTable} title="Select Table" data={props.ListTable} getItem={handleChangeTable} />
            <DatePicker date={Search.toDate} selectDate={getDateEnd} ref={endateDateSelect} />
            <DatePicker date={Search.fromDate} selectDate={getDateStart} ref={startDateSelect} />
        </View>
    )
}

const mapStateToProps = (state) => ({
    ListTable: state.TableReducers
});

export default connect(mapStateToProps, null)(HistoryScreen)
