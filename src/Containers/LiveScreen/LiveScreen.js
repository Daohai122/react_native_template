import React, { useState, useEffect } from 'react'
import { View, Text, Animated, ScrollView, TouchableOpacity } from "react-native";
import { Colors, UtillSize } from "../../Themes";
import { connect } from 'react-redux';
import styles from "./LiveScreenStyle";
const NAVBAR_HEIGHT = UtillSize.headerHeight;
import LiveApi from "./LiveApi";
import { Icon } from 'native-base';
function convertResultData(data) {
    let dataReturn = [];
    data.forEach(i => {
        if (i.MethodName.indexOf('nei') !== -1) {
            const index = dataReturn.findIndex(e => e.name === i.MethodName);
            if (index === -1) {
                dataReturn.push({
                    name: i.MethodName,
                    number: [i.Number],
                    max: i.Max,
                    Cond: i.Cond,
                    Count: i.Count
                })
            } else {
                dataReturn[index].number.push(i.Number);
                dataReturn[index].number.sort((a, b) => a - b);
            }
        }
    });
    return dataReturn;
}
const widthMethod = 60;
const widthCondition = 70;
const widthNumber = 55;
const widthMaxAll = 55;
const widthMaxToday = 70;

function LiveScreen(props) {
    const [listResult, setListResult] = useState([]);
    const [listLast, setListLast] = useState([]);

    async function getResult() {
        try {
            const resp = await LiveApi.getNumbersAsync(props.DataSetting.table, new Date(), 0);
            console.warn('res', resp.result)

            if (resp && resp.result) {
                resp.result[0] && resp.result[0].LiveData && setListResult(convertResultData(resp.result[0].LiveData));
                resp.result[1] && resp.result[1].LiveData && setListLast(resp.result[1].LiveData);
                setTimeout(() => {
                    console.warn('listResult', listResult)
                }, 1000);
            }
        } catch (err) {
            console.log('loi', err)
        }

    }

    useEffect(() => {
        getResult();
    }, [props.DataSetting.table]);

    // get table when inputnumber change
    useEffect(() => {
        if (props.ReloadData > 0) {
            getResult();
        };
    }, [props.ReloadData]);

    return (
        <View style={[styles.Container, { paddingTop: NAVBAR_HEIGHT }]}>
            <View style={styles.wrapResult}>
                <View style={styles.resultHeader}>
                    <Text style={styles.textResultHeader}>RESULT</Text>
                </View>
                <View style={styles.WrapContentResult}>
                    <View style={styles.resultElement}>
                        <View style={[styles.wrapElementResult, { width: widthMethod }]}>
                            <Text>Method</Text>
                        </View>
                        <View style={[styles.wrapElementResult, { width: widthCondition }]}>
                            <Text>Condition</Text>
                        </View>
                        <View style={[styles.wrapElementResult, { width: widthMaxAll }]}>
                            <Text>Max</Text>
                        </View>
                        <View style={[styles.wrapElementResult, { width: widthMaxToday }]}>
                            <Text>Latest</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {listResult.map((e, i) => {
                            return (
                                <TouchableOpacity style={styles.resultElement} key={i} onPress={() => props.navigation.navigate('LiveDetailScreen', {liveDetail: e})}>
                                    <View style={[styles.wrapElementResult, { width: widthMethod }]}>
                                        <Text>{'N' + i}</Text>
                                    </View>
                                    <View style={[styles.wrapElementResult, { width: widthCondition }]}>
                                        <Text>5</Text>
                                    </View>
                                    <View style={[styles.wrapElementResult, { width: widthMaxAll }]}>
                                        <Text style={styles.textListResult}>3</Text>
                                    </View>
                                    <View style={[styles.wrapElementResult, { alignItems: 'flex-end', width: widthMaxToday }]}>
                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                            <View style={[styles.wrapNumber, { marginRight: 5 }]}>
                                                <Text style={styles.colorNumber}>{e.max}</Text>
                                            </View>
                                            <Icon name='arrow-forward' type='Ionicons' style={{ color: '#bdbdbd', fontSize: 20 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
            <View style={[styles.wrapResult]}>
                <View style={styles.resultHeader}>
                    <Text style={styles.textResultHeader}>LASTEST NUMBER </Text>
                </View>
                <View style={styles.WrapContentResult}>
                    <View style={styles.resultElement}>
                        <View style={[styles.wrapElementNumber, { width: widthMethod }]}>
                            <Text>Method</Text>
                        </View>
                        <View style={[styles.wrapElementNumber, { width: widthCondition }]}>
                            <Text>Condition</Text>
                        </View>
                        <View style={[styles.wrapElementNumber, { width: widthMaxAll }]}>
                            <Text>Max</Text>
                        </View>
                        <View style={[styles.wrapElementNumber, { width: widthNumber }]}>
                            <Text>Number</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {listLast.map((e, i) => {
                            return (
                                <View style={styles.resultElement} key={i}>
                                    <View style={[styles.wrapElementNumber, { width: widthMethod }]}>
                                        <Text>{e.MethodName}</Text>
                                    </View>
                                    <View style={[styles.wrapElementNumber, { width: widthCondition }]}>
                                        <Text>5</Text>
                                    </View>
                                    <View style={[styles.wrapElementNumber, { width: widthMaxAll }]}>
                                        <Text>5</Text>
                                    </View>
                                    <View style={styles.wrapElementNumber, { width: widthNumber }}>
                                        <Text style={styles.textNumberLast}>{e.Count}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
            {/* </Animated.ScrollView> */}
            {/* <InputNumber dataSetting= {props.DataSetting}/> */}
        </View>
    )
}
const mapStateToProps = (state) => ({
    DataSetting: state.DataFillterReducers,
    ReloadData: state.DataReloadAddNumber
})

export default connect(mapStateToProps, null)(LiveScreen)