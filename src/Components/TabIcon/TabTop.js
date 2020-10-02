import React from "react";
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Colors } from "../../Themes";
export default function TabTop({ state, descriptors, navigation, position , configTab}) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const configTabIcon = configTab.find(e => e.screen == route.name);      
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key = {index}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.WrapTab}
          >
            <Animated.View style={[styles.TabStyle, {backgroundColor: isFocused ? Colors.mainColor : Colors.white}]}>
              <Animated.Text style={{color: isFocused ? Colors.white : '#000'}}>
                {configTabIcon.icon.title}
              </Animated.Text>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  WrapTab: {
    flex: 1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  TabStyle: {
    paddingHorizontal: 15, 
    paddingVertical: 5, 
    marginVertical: 10, 
    borderRadius: 15
  }
})
