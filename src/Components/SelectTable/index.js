import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import { UtillSize, Colors } from "../../Themes";
export default function SelectTable(props) {
    const scrollView = useRef(null);
    let ListTableBackUp = useRef(null);
    ListTableBackUp = props.ListTable;
    const [TableSelect, setTableSelect] = useState({})
    const [ListTable, setListTable] = useState(props.ListTable);

    useEffect(() => {
        setListTable(props.ListTable);
    }, [props.ListTable]);

    useEffect(() => {
        setTableSelect(props.tableSlect);
        pressButton(props.tableSlect);
    }, [props.tableSlect]);

    function pressButton(item, setSelect) {
        setSelect && setTableSelect(item);
        if (!item.id) {
            return;
        }
        let i = 0;
        ListTableBackUp.forEach((e, index) => {
            if (e.id == item.id) {
                i = index;
            }
        });
        let offset = 0
        for (let index = 0; index < i; index++) {
            offset += ListTableBackUp[index].width;
        }
        offset = offset - (UtillSize.screenWidth / 2) + (ListTableBackUp[i].width / 2)
        scrollView.current.scrollToOffset({ offset: offset, animated: true });
        props.handleSelectTable(item);
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapContent}>
                <View style={styles.headerSelect}>
                    <Text>Method</Text>
                    <TouchableOpacity onPress={() => props.toggleModal.current.toggleModal()}>
                        <Text style={{ color: Colors.primary }}>List Method</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        ref={scrollView}
                        data={ListTable}
                        renderItem={({ item, index }) => <TouchableOpacity
                            onLayout={e => { (ListTableBackUp[index].width = e.nativeEvent.layout.width + 6); }}
                            style={[styles.itemList, { backgroundColor: TableSelect && TableSelect.id == item.id ? '#0034c0' : '#768ac0' }]}
                            onPress={() => pressButton(item, true)}
                        >
                            <Text style={styles.textItem}>{item.name}</Text>
                        </TouchableOpacity>}
                        keyExtractor={e => e.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

        </View>
    )
}
