import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../Containers/SplashScreen/SplashScreen";
import HomeScreen from "../Containers/HomeScreen/HomeScreen";
import LoginScreen from "../Containers/LoginScreen/LoginScreen";
import LiveScreenStack from "../Containers/LiveScreen/LiveScreen";
import SettingScreen from "../Containers/SettingScreen/SettingScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from "../Components/DrawerContent/DrawerContent";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="HomeScreen"
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplasScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplasScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="LiveScreenStack" component={LiveScreenStack} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
