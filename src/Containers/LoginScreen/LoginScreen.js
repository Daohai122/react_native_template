import React, { useEffect, useState, Component } from "react";
import { Images } from "../../Themes";
import styles from "./LoginScreenStyle";
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Input } from "react-native-elements";
import { Icon } from "native-base";
import CallApi from "../../Api/CallApi";
import RequestApi from "../../Api/Api";
import { StackActions } from "@react-navigation/native";
import { ShowMessage, HideMessage } from "../../Components/Message";
import * as Animatable from 'react-native-animatable';
import { UtillSize } from "../../Themes";
import { NavHeader } from "../../Components/Header";
import { connect } from "react-redux";
import { fetchUserAction } from "../../Redux/Actions";

function LoginScreen({ onFetchUser, user, navigation }) {
  const [login, ChangeLogin] = useState({ UserName: "", PassWord: "" });
  const handerChange = (value, name) => {
    ChangeLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [showKeyboard, ChangeShowKeyboard] = useState(false);
  const openKeyboard = () => {
    if(showKeyboard) {
      return;
    }
    this.ViewAnimate.transitionTo({flex: 0.3});
    this.ViewAnimateTextTitle.transitionTo({fontSize: 55});
    // this.ViewAnimateTextDes.transitionTo({fontSize: UtillSize.smallFontSize});
    ChangeShowKeyboard(true);
  }

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        this.ViewAnimate.transitionTo({flex: 0.5});
        this.ViewAnimateTextTitle.transitionTo({fontSize: 75});
        // this.ViewAnimateTextDes.transitionTo({fontSize: UtillSize.memSizeText});
        ChangeShowKeyboard(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);
  const demoCallApi = async () => {
    console.log(onFetchUser, user);
    await onFetchUser();
    navigation.dispatch(StackActions.replace("HomeScreen"));
  };

  return (
    <View style={styles.Container}>
      <StatusBar barStyle="light-content" />
      <NavHeader style={{backgroundColor: 'transparent'}}/>
      <View style={styles.Container}>
        <Animatable.View ref={(ref) => this.ViewAnimate = ref} style={[styles.wrapHeader, { flex: showKeyboard ? 0.2 : 0.5 }]}>
          <Animatable.Text ref={(ref) => this.ViewAnimateTextTitle = ref} style={[styles.textTitleHeader, { fontSize: showKeyboard ? 45 : 65 }]}>BackTest</Animatable.Text>
          {/* <Animatable.Text ref={(ref) => this.ViewAnimateTextDes = ref} style={[styles.textDesHeader, { fontSize: showKeyboard ? UtillSize.memSizeText : UtillSize.smallFontSize }]}>ASSITANT</Animatable.Text> */}
        </Animatable.View>
        <View style={styles.wrapViewContent}>
          <View style={styles.viewInput}>
            <Input
              placeholder='Your user'
              placeholderTextColor='#fff'
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={{ color: '#fff' }}
              value={login.UserName}
              onChangeText={(e) => handerChange(e, 'UserName')}
              onFocus={() => openKeyboard()}
              leftIcon={
                <Icon
                  type='EvilIcons'
                  name='user'
                  style={{ color: '#fff', fontSize: 35 }}
                />
              }
            />
          </View>
          <View style={styles.viewInput}>
            <Input
              placeholder='Your password'
              value={login.PassWord}
              onChangeText={(e) => handerChange(e, 'PassWord')}
              secureTextEntry
              placeholderTextColor='#fff'
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={{ color: '#fff' }}
              onFocus={() => openKeyboard()}
              leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  type='EvilIcons'
                  style={{ color: '#fff', fontSize: 35 }}
                />
              }
            />
          </View>
          <View style={styles.wrapTextForgot}>
            <TouchableOpacity>
              <Text style={styles.textForGot}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.ButtonLogin} onPress={(() => demoCallApi())}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.LoginReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUser: () => {
      dispatch(fetchUserAction());
    },
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
export default LoginContainer;