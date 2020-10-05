import React, { useState, useEffect } from 'react'
import { View, Text, Animated, ScrollView, TouchableOpacity } from "react-native";
import { Colors, UtillSize } from "../../Themes";
import styles from "./LiveScreenStyle";
const NAVBAR_HEIGHT = UtillSize.headerHeight;
import LiveApi from "./LiveApi";
import InputNumber from "../../Components/inputNumber";
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
                    <ScrollView>
                        {listResult.map((e, i) => {
                            return (
                                <View style={styles.resultElement} key={i}>
                                    <Text>{'N' + i}</Text>
                                    <Text style={styles.textListResult}>{e.number.length < 6 ? e.number.join(', ') : e.number.slice(0, 5).join(', ') + ' ...'}</Text>
                                    <View style={styles.wrapNumber}>
                                        <Text style={styles.colorNumber}>{e.max}</Text>
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
                    <ScrollView>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {listLast.map((e, i) => {
                                return (
                                    <View style={{ width: (UtillSize.screenWidth - 72) / 4, marginRight: 3 }} key={i}>
                                        <View style={{ paddingVertical: 5, backgroundColor: "#f5f5f5", alignItems: 'center' }}>
                                            <Text>{e.MethodName}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', paddingVertical: 5 }}>
                                            <Text>{e.Count}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
            {/* </Animated.ScrollView> */}
            <InputNumber/>
        </View>
    )
}
