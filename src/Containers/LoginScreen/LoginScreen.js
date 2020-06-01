import React, {useEffect, useState, Component} from 'react'
import {Images} from '../../Themes'
import styles from './LoginScreenStyle';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import {Input} from 'react-native-elements';
import { Icon } from "native-base";
import CallApi from "../../Api/CallApi";
import RequestApi from "../../Api/Api";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { StackActions } from '@react-navigation/native';
import { ShowMessage, HideMessage } from "../../Components/Message";
function LoginScreen ({navigation}) {
  const [login, ChangeLogin] = useState({UserName: '', PassWord: ''})
  const handerChange = (value, name) => {
    ChangeLogin(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }
  setTimeout(() => {
    ShowMessage('ok','warning',null, 'bottom')
  }, 1000);
  const demoCallApi = async () => {
    navigation.dispatch(
      StackActions.replace('HomeScreen')
    );
    return;
    let res = await RequestApi(CallApi.LoginScreen.LONGIN);
  }
  return (
    <View style={styles.Container}>
        <StatusBar barStyle="light-content" />
        <Header title={'BỆNH ÁN ĐIỆN TỬ'}/>
        <View style={{flex:1, backgroundColor:'#fff'}}>
          <View style={{flex: 0.2}}/>
          <View>
            <Input value={login.UserName} placeholder='Tài khoản' onChangeText={(text) => handerChange(text, 'UserName')}/>
            <Input secureTextEntry value={login.PassWord} placeholder='Mật khẩu' onChangeText={(text) => handerChange(text, 'PassWord')}/>
            <View style={{justifyContent:'center'}}>
              <Button title={'Đăng nhập'} onPress={() => demoCallApi()}/>
            </View>
          </View>
        </View>
    </View>
  )
}
export default LoginScreen;

