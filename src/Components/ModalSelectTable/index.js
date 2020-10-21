import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput } from "react-native";
import { UtillSize, Colors } from "../../Themes";
import { Icon } from "native-base";
import Modal from "react-native-modal";
const index = forwardRef((props, ref) => {

    const [Visible, setVisible] = useState(false)
    const [SelectTable, setSelectTable] = useState({});
    const [ListTable, setListTable] = useState(props.ListTable);

    useEffect(() => {
        setListTable(props.ListTable);
    }, [props.ListTable]);

    useImperativeHandle(
        ref,
        () => ({
            toggleModal() {
                setVisible(!Visible);
            }
        })
    )

    function toggleModal() {
        setVisible(!Visible);
    }

    function selectTable(item) {
        setSelectTable(item);
        setVisible(false);
        props.handleSelectTable(item);
    } 

    return (
        <Modal isVisible={Visible} style={{margin: 0, justifyContent: 'flex-end',}}>
            <View style={{backgroundColor: 'white', height: UtillSize.screenHeight - UtillSize.navBarHeight}}>
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.buttonClose} onPress={() => toggleModal()}>
                            <Icon name="close" style={{fontSize: 30, color: Colors.mainColor}}/>
                        </TouchableOpacity>
                        <Text style={styles.titleHeader}>List Method</Text>
                        <View style={[styles.buttonClose, {opacity: 0}]}>
                            <Icon name="close"/>
                        </View>
                    </View>
                    <View style={{marginHorizontal: 15, marginTop: 10, paddingBottom: 10}}>
                        <View style={styles.wrapSearch}>
                            <Icon name="search" style={{color: Colors.white, fontSize: 25}}/>
                            <TextInput style={styles.inputSearch} placeholder="Search method" placeholderTextColor="#ececec"/>
                        </View>
                    </View>
                </View>
                <FlatList
                    horizontal={false}
                    numColumns = {3}
                    contentContainerStyle={styles.flatlist}
                    keyExtractor={(e, index) => index}
                    data={ListTable}
                    renderItem={({item, index}) => <View style={styles.wrapItem}>
                        <TouchableOpacity style={[styles.item, {backgroundColor: SelectTable&&SelectTable.id == item.id? '#0034c0': mainColor}]} onPress={() => selectTable(item)}>
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>}
                />
            </View>
        </Modal>
    )
  });
export default index;
const mainColor = '#768ac0'
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row' , 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottomWidth: 0.7,
        borderBottomColor: Colors.mainColor
    },
    buttonClose: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    titleHeader: {
        fontSize: UtillSize.titleFontSize,
        fontWeight: '500',
        color: Colors.mainColor
    },
    wrapSearch: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: mainColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        alignItems: 'center'
    },
    inputSearch: {
        height: 35,
        color: Colors.white,
        width: UtillSize.screenWidth - 75,
        fontSize: UtillSize.titleFontSize
    },
    flatlist: {
       marginHorizontal: 15
    },
    wrapItem: {
        width: (UtillSize.screenWidth - 30)/3,
        padding: 10
    },
    item: {
        flex: 1,
        padding: 5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: mainColor,
        borderRadius: 5
    },
    text: {
        color: 'white',
        fontSize: UtillSize.memSizeText
    }
})
