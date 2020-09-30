import React from "react";
import styles from "./HeaderStyle";
import { View } from "react-native";
export default function NavHeader(props) {
    return (        
        <View style={[styles.navBar, props.style??{} ]}/>
    )
}
