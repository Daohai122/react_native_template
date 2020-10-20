import React, {useEffect, useState, Component} from 'react';
import styles from "./SplashScreenStyle";
import { Images } from "../../Themes";
import { StackActions } from '@react-navigation/native';
import Mushroom from "../../Api/Mushroom";

import {
  StatusBar,
  View,
  ImageBackground
} from 'react-native';

function SplashScreen({ navigation }) {
  useEffect( () => {
    async function checkLogin() {
      const res = await Mushroom.$auth.statusAsync();
      if(res) {
        navigation.dispatch(
          StackActions.replace('HomeScreen')
        );
      } else {
        navigation.dispatch(
          StackActions.replace('LoginScreen')
        );
      }
    }
    checkLogin();
  }, []);
  return ( 
    <View style={styles.Container}>
      <ImageBackground source={Images.ImageBackground} style={{flex:1}}>
        <StatusBar barStyle="dark-content" />
      </ImageBackground>
    </View>
  ); 
};
export default SplashScreen;
