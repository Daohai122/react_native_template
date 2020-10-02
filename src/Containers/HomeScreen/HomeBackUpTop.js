import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Text
} from "react-native";
import { NavHeader, Header } from "../../Components/Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors } from "../../Themes";
import TabTop from "../../Components/TabIcon/TabTop";

const Tab = createMaterialTopTabNavigator();

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexTabActive: 0,
      configTab: [
        {
          screen: "LiveScreen",
          icon: {
            nameIcon: "live-tv",
            typeIcon: "MaterialIcons",
            title: "Live",
            // number: 0,
          },
        },
        {
          screen: "DetailScreen",
          icon: {
            nameIcon: "profile",
            typeIcon: "AntDesign",
            title: "Detail",
            // number: 0,
          },
        },
        {
          screen: "SearchScreen",
          icon: {
            nameIcon: "search",
            typeIcon: "Feather",
            title: "Search",
            // number: 0,
          },
        },
        {
          screen: "SettingScreen",
          icon: {
            nameIcon: "settings",
            typeIcon: "SimpleLineIcons",
            title: "Setting",
            // number: 0,
          },
        }
      ]
    };
  }
  componentDidMount() {
    setTimeout(() => {
      // this.props.navigation.navigate('LiveScreenStack');
    }, 1000);
  }
  render() {
    console.log(this.props.user);
    return (
      <View style={{ flex: 1,  backgroundColor: Colors.white }}>
        <StatusBar barStyle="light-content" />
        <NavHeader />
        <SafeAreaView style={{ flex: 1 }}>
          <Header
            // leftFunction={() => this.props.navigation.openDrawer()}
            // IconLeft={{ name: "menu", type: "Ionicons" }}
            title={"Home"}
            NoNavHeader
          />
           {this.state.configTab?
          <Tab.Navigator
            tabBar={props => <TabTop {...props} />}
          >
            {this.state.configTab.map((item, index) => {
              return (
                <Tab.Screen name={item.screen} key={index}>
                  {/* {(props) => <DanhSachComponent {...props} />} */}
                  {(props) => <View style={{flex: 1}}><Text>{item.screen}</Text></View>}
                </Tab.Screen>
              );
            })}          
          </Tab.Navigator>
          :<View/>}
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
