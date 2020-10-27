import React, { useState, useEffect } from 'react'
import { View, Text, Animated, ScrollView, TouchableOpacity } from "react-native";
import { Colors, UtillSize } from "../../Themes";
import styles from "./LiveScreenStyle";
const NAVBAR_HEIGHT = UtillSize.headerHeight;
import LiveApi from "./LiveApi";
import InputNumber from "../../Components/inputNumber";
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
                    max: i.Count
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

export default function LiveScreen({ navigation, scroll }) {
    const [listResult, setListResult] = useState([]);
    const [listLast, setListLast] = useState([]);
    useEffect(() => {
        async function getResult() {
            try {
                const resp = await LiveApi.getNumbersAsync('5f6087597e6b4b144468c8d8', new Date(), 0);
                console.log('resp', resp);
                if (resp && resp.result) {
                    resp.result[0] && resp.result[0].LiveData && setListResult(convertResultData(resp.result[0].LiveData));
                    resp.result[1] && resp.result[1].LiveData && setListLast(resp.result[1].LiveData);
                }
            } catch (err) {
                console.log('loi', err)
            }

        }
        getResult();
    }, [])

    return (
        <View style={[styles.Container, { paddingTop: NAVBAR_HEIGHT }]}>
            {/* <Animated.ScrollView
                scrollEventThrottle={1}
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={{ zIndex: 0, height: "100%", elevation: -1 }}
                contentContainerStyle={{ paddingTop: NAVBAR_HEIGHT }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scroll } } }],
                    { useNativeDriver: true },
                )}
                overScrollMode="never"> */}
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
                                <View style={styles.resultElement} key={i}>
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
                                </View>
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
            <InputNumber />
        </View>
    )
}
