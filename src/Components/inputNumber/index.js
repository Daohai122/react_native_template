import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Keyboard, TextInput } from "react-native";
import { Colors, UtillSize } from "../../Themes";
import { Icon} from 'native-base';
import { ShowMessage } from "../Message";
import * as Animatable from 'react-native-animatable';
const heightKeyboard = 280
export default function InputNumber() {
    const [showInput, setShowInput] = useState(false);
    const [number, setNumber] = useState('');
    inputNumber = null;
    function showInputNumber() {
        setShowInput(true);
        this.ViewInputNumber.transitionTo({ width: UtillSize.screenWidth - 20 });
        inputNumber.focus();
    }
    function hideInputNumber() {
        setNumber('')
        Keyboard.dismiss();
        setShowInput(false);
        this.ViewInputNumber.transitionTo({ width: 0 });
    }
    const onFocusInput = () => {
        this.ViewContainer.transitionTo({ bottom: heightKeyboard });
    };
    const onBlurInput = () => {
        this.ViewContainer.transitionTo({ bottom: 10 });
    }
    const handerChnageInput = (value) => {
        if(value) {
            this.ViewContainer.transitionTo({ bottom: heightKeyboard + 40 });
        } else {
            this.ViewContainer.transitionTo({ bottom: heightKeyboard });
        }
        if(value <= 36) {
            setNumber(value);
        } else {
            ShowMessage('Number <= 36!', 'warning')
        }
    }
    const SubmitInput = () => {
        hideInputNumber();
    }
    return (
        <Animatable.View ref={(ref) => this.ViewContainer = ref} style={styles.container}>
            <View style={styles.wrapContent}>
                <Animatable.View ref={(ref) => this.ViewInputNumber = ref} style={[styles.wrapInput, { width: showInput ? '100%' : 0 }]}>
                    <TextInput onChangeText={handerChnageInput} value={number} onSubmitEditing={SubmitInput} ref={(ref) => inputNumber = ref} keyboardType='number-pad' onBlur={onBlurInput} onFocus={onFocusInput} returnKeyType={number.trim() != ''?'done':''} placeholder='number' style={[styles.input, { display: showInput ? 'flex' : 'none' }]} />
                    <TouchableOpacity onPress={() => hideInputNumber()} style={[styles.inputSubmit, { display: showInput ? 'flex' : 'none' }]}>
                        <Text style={{ color: Colors.white }}>Cancel</Text>
                    </TouchableOpacity>
                </Animatable.View>
                <TouchableOpacity onPress={() => showInputNumber()} activeOpacity={0.7} style={[styles.buttonShow, { display: showInput ? 'none' : 'flex' }]}>
                    <Icon name='pencil' type='SimpleLineIcons' style={{ fontSize: 20, color: Colors.white }} />
                </TouchableOpacity>
            </View>
        </Animatable.View>
    )
}

const heightViewInput = 45;
const borderViewRadius = 8;
const witdhInputSubmit = 55;
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        width: '100%'
    },
    wrapContent: {
        marginHorizontal: 10,
        alignItems: 'flex-end',
        height: heightViewInput
    },
    wrapInput: {
        borderRadius: borderViewRadius,
        backgroundColor: Colors.white,
        height: heightViewInput,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: Colors.mainColor,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2,
    },
    input: {
        paddingLeft: 10,
        width: UtillSize.screenWidth - witdhInputSubmit - UtillSize.margin*2,
        borderTopLeftRadius: borderViewRadius,
        borderBottomLeftRadius: borderViewRadius,
        height: heightViewInput
    },
    inputSubmit: {
        borderTopRightRadius: borderViewRadius,
        borderBottomRightRadius: borderViewRadius,
        backgroundColor: Colors.mainColor,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        width: witdhInputSubmit
    },
    buttonShow: {
        width: heightViewInput,
        height: heightViewInput,
        borderRadius: heightViewInput,
        backgroundColor: Colors.mainColor,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.3
    }
})