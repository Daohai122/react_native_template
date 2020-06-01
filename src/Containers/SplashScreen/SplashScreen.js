import React, {useEffect, useState} from 'react';
import styles from "./SplashScreenStyle";
import { Images } from "../../Themes";
import { StackActions } from '@react-navigation/native';

import {
  StatusBar,
  View,
  ImageBackground
} from 'react-native';

function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        StackActions.replace('LoginScreen')
      );
    }, 1000)
  });
  return ( 
    <View style={styles.Container}>
      <ImageBackground source={Images.ImageBackground} style={{flex:1}}>
        <StatusBar barStyle="dark-content" />
      </ImageBackground>
    </View>
  ); 
};

export default SplashScreen;
