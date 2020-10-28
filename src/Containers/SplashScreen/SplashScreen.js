import React, {useEffect, useState, Component} from 'react';
import styles from "./SplashScreenStyle";
import { Images } from "../../Themes";
import { StackActions } from '@react-navigation/native';
import { connect } from 'react-redux'
import Mushroom from "../../Api/Mushroom";

import {
  StatusBar,
  View,
  ImageBackground
} from 'react-native';

function SplashScreen(props) {
  useEffect( () => {
    async function checkLogin() {
      const res = await Mushroom.$auth.statusAsync();
      if(res) {
        props.onFetchInit();
        setTimeout(() => {
          props.navigation.dispatch(
            StackActions.replace('HomeScreen')
          );
        }, 1500);
      } else {
        props.navigation.dispatch(
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
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchInit: () => {
      dispatch({type: 'FETCH_INIT'});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
