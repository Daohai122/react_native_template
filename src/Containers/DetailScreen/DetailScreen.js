import React from 'react'
import { View, Text } from "react-native";
import styles from "./DetailScreenStyle";
import SelectTable from "../../Components/SelectTable";
function DetailScreen() {
    console.log('co vao detail')
    return (
        <View style={styles.container}>
           <SelectTable />
        </View>
    )
}
export default React.memo(DetailScreen);
