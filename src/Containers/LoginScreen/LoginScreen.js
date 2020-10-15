import React, { useEffect, useState } from "react";
import { Images } from "../../Themes";
import styles from "./LoginScreenStyle";
import {
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  Keyboard,
  Image
} from "react-native";
import { Input } from "react-native-elements";
import { Icon } from "native-base";
import { StackActions } from "@react-navigation/native";
import { ShowMessage, HideMessage } from "../../Components/Message";
import * as Animatable from 'react-native-animatable';
// import { NavHeader, Header } from "../../Components/Header";
import { connect } from "react-redux";
import { fetchUserAction } from "../../Redux/Actions";
import Mushroom from "../../Api/Mushroom";
import { Colors } from "../../Themes";
import LinearGradient from 'react-native-linear-gradient';


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
    this.ViewAnimateTextTitle.transitionTo({width: '40%'});
    // this.ViewAnimateTextDes.transitionTo({fontSize: UtillSize.smallFontSize});
    ChangeShowKeyboard(true);
  }

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        this.ViewAnimate.transitionTo({flex: 0.5});
        this.ViewAnimateTextTitle.transitionTo({width: '55%'});
        // this.ViewAnimateTextDes.transitionTo({fontSize: UtillSize.memSizeText});
        ChangeShowKeyboard(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);
  const demoCallApi = async () => {
    if(!login.UserName || (login.UserName && !login.UserName.trim())) {
      ShowMessage('Please input your user!','danger');
      return;
    }
    if(!login.PassWord || (login.PassWord && !login.PassWord.trim())) {
      ShowMessage('Please input your password!','danger');
      return;
    }
    let res = await Mushroom.$auth.loginAsync(login.UserName, login.PassWord, true);
    if(res && res.result) {
      navigation.dispatch(StackActions.replace("HomeScreen"));
    }
  };

  return (
    <View style={styles.Container}>
      {/* <StatusBar barStyle="light-content" />
      <NavHeader style={{backgroundColor: Colors.mainColor}}/>
      <Header title='Sign in' NoNavHeader/> */}
      <LinearGradient colors={['#451088', '#10054d']} style={styles.Container}>
      <View style={[styles.Container]}>
        <Animatable.View ref={(ref) => this.ViewAnimate = ref} style={[styles.wrapHeader, { flex: showKeyboard ? 0.2 : 0.5 }]}>
          <Animatable.Image ref={(ref) => this.ViewAnimateTextTitle = ref} source={require('../../Assets/Images/Logo_UV.png')} style={{width: showKeyboard ? '40%' : '55%'}} resizeMode='contain'/>
          {/* <Animatable.Text ref={(ref) => this.ViewAnimateTextTitle = ref} style={[styles.textTitleHeader, { fontSize: showKeyboard ? 45 : 65 }]}>BackTest</Animatable.Text> */}
          {/* <Animatable.Text ref={(ref) => this.ViewAnimateTextDes = ref} style={[styles.textDesHeader, { fontSize: showKeyboard ? UtillSize.memSizeText : UtillSize.smallFontSize }]}>ASSITANT</Animatable.Text> */}
        </Animatable.View>
        <Image source={require('../../Assets/Images/background_login.jpg')} style={{width: 100, height: 100}}/>
        <View style={styles.wrapViewContent}>
          <Input
            keyboardType='default'
            autoCapitalize= "none"
            placeholder='Your user'
            placeholderTextColor='#b3b3b3'
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={{ color: '#b3b3b3' }}
            containerStyle={styles.viewInput}
            value={login.UserName}
            onChangeText={(e) => handerChange(e, 'UserName')}
            onFocus={() => openKeyboard()}
            leftIcon={
              <Icon
                type='EvilIcons'
                name='user'
                style={{ color: '#b3b3b3', fontSize: 35 }}
              />
            }
          />
          <Input
            placeholder='Your password'
            value={login.PassWord}
            onChangeText={(e) => handerChange(e, 'PassWord')}
            secureTextEntry
            placeholderTextColor='#b3b3b3'
            containerStyle={styles.viewInput}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={{ color: '#b3b3b3' }}
            onFocus={() => openKeyboard()}
            leftIcon={
              <Icon
                name='lock'
                size={24}
                type='EvilIcons'
                style={{ color: '#b3b3b3', fontSize: 35 }}
              />
            }
          />
          {/* <View style={styles.wrapTextForgot}>
            <TouchableOpacity>
              <Text style={styles.textForGot}>Forgot your password?</Text>
            </TouchableOpacity>
          </View> */}
          <TouchableOpacity style={styles.ButtonLogin} onPress={(() => demoCallApi())}>
            <Text style={styles.textLogin}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>
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