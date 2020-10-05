import React from "react";
import { View,  Text } from "react-native";
import { Header } from "../../Components/Header";
export default function SettingScreen({navigation}) {
    console.log('coavo')
    return (
        <View style={{flex: 1}}>
            <Header  leftFunction={() => navigation.goBack()} IconLeft={{ name: "arrow-back", type: "Ionicons" }} title='Setting'/>
            <Text>SettingScreen</Text>
        </View>
    )
}