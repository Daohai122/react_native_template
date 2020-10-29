import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Switch,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { NavHeader } from '../Header';
import { Fonts, Colors } from '../../Themes';
import { Icon } from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native'
import Mushroom from "../../Api/Mushroom";
import { connect } from "react-redux";
import { StackActions } from "@react-navigation/native";

function DrawerContent({navigation, updateDataSetting}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  async function logOut() {
    try {
      const res = await Mushroom.$auth.logoutAsync();
      // xoa du lieu init 
      updateDataSetting({});
      navigation.dispatch(StackActions.replace("LoginScreen"));
    } catch (error) {
      navigation.dispatch(StackActions.replace("LoginScreen"));
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <NavHeader />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 15,
          backgroundColor: Colors.mainColor,
        }}>
        {/* <Image source={Images.LogoWhite} style={{height: 40}} resizeMode='contain'/> */}
        <Text style={[Fonts.normal,{ paddingTop: 10, fontWeight: '600', color: '#fff' },]}>
          Admin
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: Colors.mainColor,
            paddingBottom: 5,
          }}>
          <TouchableOpacity style={styles.item} >
            <View style={styles.wrapIcon}>
              <Icon name="md-time" type="Ionicons" style={styles.icon} />
            </View>
            <Text style={styles.Text}>Condition</Text>
          </TouchableOpacity>
          <View style={[styles.item, {justifyContent: 'space-between'}]} >
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <View style={styles.wrapIcon}>
                <Icon name="notifications-outline" type="Ionicons" style={styles.icon} />
              </View>
              <Text style={styles.Text}>Notification</Text>
            </View>
            <View style={{marginRight: 10}}>
              <ToggleSwitch
                isOn={isEnabled}
                onColor="green"
                offColor="red"
                onToggle={toggleSwitch}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <TouchableOpacity style={styles.item} onPress={logOut}>
            <View style={styles.wrapIcon}>
              <Icon
                name="logout"
                type="AntDesign"
                style={[styles.icon, { fontSize: 18 }]}
              />
            </View>
            <Text style={styles.Text}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    color: Colors.mainColor,
    fontSize: 25,
  },
  wrapIcon: {
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: Colors.mainColor,
    fontSize: 16,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateDataSetting: (data) => {
      dispatch({ type: UPDATE_DATAFILLTER, payload: {data}})
    },
  };
};
export default connect(null, mapDispatchToProps)(DrawerContent);