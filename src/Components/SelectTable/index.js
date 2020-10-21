import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import styles from "./styles";
import { UtillSize, Colors } from "../../Themes";
export default function SelectTable(props) {
    const scrollView = useRef(null);
    let ListTableBackUp = useRef(null);
    ListTableBackUp = props.ListTable;
    const [ListTable, setListTable] = useState(props.ListTable);
    useEffect(() => {
        setListTable(props.ListTable);
    }, [props.ListTable])
    function pressButton(i, item) {
        let offset = 0
        for (let index = 0; index < i; index++) {
            offset += ListTableBackUp[index].width;
        }
        offset = offset - (UtillSize.screenWidth/2) + (ListTableBackUp[i].width/2)
        scrollView.current.scrollToOffset({ offset: offset, animated: true });
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapContent}>
                <View style={styles.headerSelect}>
                    <Text>Tables</Text>
                    <TouchableOpacity>
                        <Text style={{color: Colors.primary}}>List Table</Text>
                    </TouchableOpacity>
                </View>
                <View>
                <FlatList
                    ref={scrollView}
                    data={ListTable}
                    renderItem={({item, index}) =>  <TouchableOpacity 
                        onLayout={e => {(ListTableBackUp[index].width = e.nativeEvent.layout.width + 6); }}
                        style={styles.itemList}
                        onPress={() => pressButton(index, item)}
                    >
                        <Text style={styles.textItem}>{item.name}</Text>
                    </TouchableOpacity>}
                    keyExtractor={e => e.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                    {/* <ScrollView
                        ref={scrollView}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    > 
                     {ListTable.map((e, i) => {
                        return (
                            <TouchableOpacity 
                                onLayout={e => { (ListTableBackUp[i].x = e.nativeEvent.layout.x), (ListTableBackUp[i].y = e.nativeEvent.layout.y), (ListTableBackUp[i].width = e.nativeEvent.layout.width / 2); }}
                                key={i} style={styles.itemList}
                                onPress={() => pressButton(i, e)}
                            >
                                <Text style={styles.textItem}>{e.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                    </ScrollView> */}
                </View>
            </View>

        </View>
    )
}
