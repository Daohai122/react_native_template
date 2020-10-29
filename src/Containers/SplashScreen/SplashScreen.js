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
      try {
        const res = await Mushroom.$auth.meAsync();
        console.warn('res', res)
        if(res && res.result) {
          props.onFetchInit();
        } else {
          props.navigation.dispatch(
            StackActions.replace('LoginScreen')
          );
        }
      } catch (error) {
        console.warn('error', error)

        props.navigation.dispatch(
          StackActions.replace('LoginScreen')
        );
      }
      
    }
    checkLogin();
  }, []);

  useEffect(() => {
    if(props.DataSetting && props.DataSetting.table) {
      props.navigation.dispatch(
        StackActions.replace('HomeScreen')
      );
    }
  }, [props.DataSetting]);
  
  return ( 
    <View style={styles.Container}>
      <ImageBackground source={Images.ImageBackground} style={{flex:1}}>
        <StatusBar barStyle="dark-content" />
      </ImageBackground>
    </View>
  ); 
};
const mapStateToProps = (state) => ({
  DataSetting: state.DataFillterReducers
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchInit: () => {
      dispatch({type: 'FETCH_INIT'});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
