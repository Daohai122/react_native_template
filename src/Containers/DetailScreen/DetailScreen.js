import React from 'react'
import { View, Text } from "react-native";
function DetailScreen() {
    console.log('co vao detail')
    return (
        <View style={{flex:1}}>
            <Text>DetailScreen</Text>
        </View>
    )
}
export default React.memo(DetailScreen);
