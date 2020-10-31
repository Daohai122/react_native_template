import React from "react";
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Colors } from "../../Themes";
export default function TabTop({ state, descriptors, navigation, position , configTab, callBackPressTab}) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const configTabIcon = configTab.find(e => e.screen == route.name);      
        const isFocused = state.index === index;

        const onPress = () => {
          console.warn('route.key', route, index)
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          callBackPressTab(index);
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
          callBackPressTab(index);
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
              <Animated.Text style={{color: isFocused ? Colors.white : '#616161'}}>
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
