import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { NavHeader, Header } from "../../Components/Header";

import { Colors } from "../../Themes";
import TabIcon from "../../Components/TabIcon/TabIcon";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexTabActive: 0,
    };
  }
  render() {
    console.log(this.props.user);
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <NavHeader />
        <SafeAreaView style={{ flex: 1 }}>
          <Header
            leftFunction={() => this.props.navigation.openDrawer()}
            IconLeft={{ name: "menu", type: "Ionicons" }}
            title={"Bệnh án điện tử"}
            NoNavHeader
          />
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#fff",
    shadowColor: Colors.mainColor,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  tabItem: {
    backgroundColor: "#fff",
  },
});
export default HomeScreen;
