import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../Containers/SplashScreen/SplashScreen";
import HomeScreen from "../Redux/Containers/HomeContainer";
import LoginScreen from "../Redux/Containers/LoginContainer";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createStackNavigator();

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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
