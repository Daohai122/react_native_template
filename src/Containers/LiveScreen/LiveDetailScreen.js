import React from 'react';
import { View, StyleSheet } from "react-native";
import { Header } from "../../Components/Header";

export default function LiveDetailScreen(props) {
    return (
        <View style={styles.container}>
            <Header leftFunction={() => props.navigation.goBack()} IconLeft={{ name: "arrow-back", type: "Ionicons" }} title='Detail' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})