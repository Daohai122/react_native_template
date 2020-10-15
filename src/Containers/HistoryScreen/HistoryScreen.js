import React from 'react'
import { View, Text, FlatList } from "react-native";
import NumberColor from "./NumberColor";
import styles from "./HistoryScreenStyle";
import { Icon } from "native-base";
import { TouchableOpacity } from 'react-native-gesture-handler';
const Data = [1, 2, 3, 4]
const Item = ({i}) => {
    return (
        <View>
            <View style={styles.headerItem}>
                <Text>{10 + i.index + '/10/2020'}</Text>
            </View>
            <View>
                <View style={[styles.ItemContent, {borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5}]}>
                    <View style={styles.boxItemElementNo}>
                        <Text style={[styles.textNumber, {color: NumberColor['9']}]}>9</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text>9:21</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text>wep</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text>Đức</Text>
                    </View>
                </View>
                <View style={[styles.ItemContent, {borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5}]}>
                    <View style={styles.boxItemElementNo}>
                    <Text style={[styles.textNumber, {color: NumberColor['8']}]}>8</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text>9:21</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text>wep</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text>Đức</Text>
                    </View>
                </View>
                <View style={[styles.ItemContent, {borderBottomColor: '#bdbdbd', borderBottomWidth: i.index == 3 ? 0.5 : 0}]}>
                    <View style={styles.boxItemElementNo}>
                    <Text style={[styles.textNumber, {color: NumberColor['7']}]}>7</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text>9:21</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text>wep</Text>
                    </View>
                    <View style={styles.boxItemElement}>
                        <Text>Đức</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
 function HistoryScreen() {
    const renderItem = (e, i) => (
        <Item i={e}/>
    );
    return (
        <View style={styles.container}>
            <View style={{marginTop: 10, alignItems:'center'}}>
                <View style={styles.wrapSelectDate}>
                    <View style={styles.labelView}>
                        <Text>From</Text>
                    </View>
                    <TouchableOpacity style={styles.selectDate}>
                        <Text>13/10/2020</Text>
                        <Icon style={{fontSize: 20, color: '#525354'}} name='calendar' type='SimpleLineIcons'/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.wrapSelectDate, {marginTop: 10}]}>
                    <View style={styles.labelView}>
                        <Text>To</Text>
                    </View>
                    <TouchableOpacity style={styles.selectDate}>
                        <Text>13/10/2020</Text>
                        <Icon style={{fontSize: 20, color: '#525354'}} name='calendar' type='SimpleLineIcons'/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.wrapSelectDate, {marginTop: 10}]}>
                    <View style={styles.labelView}>
                        <Text>Table</Text>
                    </View>
                    <TouchableOpacity style={styles.selectDate}>
                        <Text>Đức</Text>
                        <Icon style={{fontSize: 12, color: '#525354'}} name='caretdown' type='AntDesign'/>
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
                        data={Data}
                        keyExtractor={e => e}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </View>
    )
}

export default HistoryScreen
