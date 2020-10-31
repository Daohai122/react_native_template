import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { Header } from "../../Components/Header";
import { Colors, UtillSize } from "../../Themes";
export default function LiveDetailScreen(props) {
    const {liveDetail} = props.route.params;
    console.warn(liveDetail)
    return (
        <View style={styles.container}>
            <Header leftFunction={() => props.navigation.goBack()} IconLeft={{ name: "arrow-back", type: "Ionicons" }} title='Detail' />
            <View style={[styles.container, { backgroundColor: Colors.white, padding: UtillSize.margin }]}>
                <View style={styles.wrapContent}>
                    <View style={styles.header}>
                        <Text style={{fontSize: 17, fontWeight: '500'}}>Method: {liveDetail.name}</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.contentCondition}>
                            <View style={styles.itemCondition}>
                                <View style={styles.itemConditionHeader}>
                                    <Text style={[styles.titleCondition, {color: 'black'}]}>Count</Text>
                                </View>
                                <Text style={[styles.TextItem]}>{liveDetail.Count}</Text>
                            </View>
                            <View style={styles.itemCondition}>
                                <View style={styles.itemConditionHeader}>
                                    <Text style={styles.titleCondition}>Cond</Text>
                                </View>
                                <Text style={styles.TextItem}>{liveDetail.Cond >= 0 ? liveDetail.Cond: ' '}</Text>
                            </View>
                            <View style={styles.itemCondition}>
                                <View style={styles.itemConditionHeader}>
                                    <Text style={[styles.titleCondition,  {color: 'red'}]}>Max</Text>
                                </View>
                                <Text style={styles.TextItem}>{liveDetail.max}</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.headerList}>
                                <Text style={[styles.titleCondition, {color: 'black'}]}>List Number</Text>
                            </View>
                            <View style={{margin: 5}}>
                                <Text style={{fontWeight: '400', fontSize: 17}}>{liveDetail.number.join(', ')}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const borderRadius = 5;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapContent: {
        // flex: 0.5,
        borderRadius: borderRadius,
        margin: UtillSize.margin,
        backgroundColor: Colors.white,
        shadowColor: Colors.margin,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1,
    },
    content: {
        padding: 10
    },
    header: {
        padding: 7,
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius
    },
    contentCondition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    itemCondition: {
        width: (UtillSize.screenWidth - ((UtillSize.margin * 2) + 40)) / 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#bdbdbd',
        borderWidth: 0.5,
    },
    itemConditionHeader: {
        borderColor: '#bdbdbd',
        borderBottomWidth: 0.5,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 5
    },
    TextItem: {
        paddingVertical: 5,
        fontSize: UtillSize.titleFontSize,
        fontWeight: '400'
    },
    titleCondition: {
        fontSize: 16,
        color: 'green'
    },
    headerList: {
        padding: 5,
        backgroundColor: '#f5f5f5'
    }
})