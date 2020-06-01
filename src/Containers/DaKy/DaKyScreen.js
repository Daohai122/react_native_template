import React, {Component} from 'react';
import {SafeAreaView, Text, StatusBar, View, ScrollView} from 'react-native';
import {NavHeader, Header} from '../../Components/Header';
import { Footer, FooterTab, Button, Icon } from "native-base";
import { withNavigation } from "@react-navigation/compat";
class DaKyScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content" />
        <NavHeader />
        <SafeAreaView style={{flex:1}}>
          <Header
            leftFunction={() => this.props.navigation.openDrawer()}
            IconLeft={{name: 'menu', type: 'Ionicons'}}
            title={'Bệnh án đã ký'}
            NoNavHeader
          />
          <ScrollView>
           <Text>Nooij dung</Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default withNavigation(DaKyScreen);
