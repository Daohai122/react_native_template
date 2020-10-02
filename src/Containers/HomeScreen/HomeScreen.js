import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Text,
  Animated
} from "react-native";
import { NavHeader, Header } from "../../Components/Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors, UtillSize } from "../../Themes";
import TabTop from "../../Components/TabIcon/TabTop";
import SearchScreen from "../SearchScreen";
const Tab = createMaterialTopTabNavigator();

const NAVBAR_HEIGHT = UtillSize.headerHeight;
class HomeScreen extends Component {
  scroll = new Animated.Value(0);
  headerY;
  constructor(props) {
    super(props);
    this.headerY = Animated.multiply(Animated.diffClamp(this.scroll, 0, NAVBAR_HEIGHT), -1);
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
    const tabY = Animated.add(this.scroll, this.headerY);
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <StatusBar barStyle="light-content" />
        <NavHeader />
        <SafeAreaView style={{ flex: 1 }}>
          <Animated.View style={{
            width: "100%",
            position: "absolute",
            transform: [{
              translateY: this.headerY
            }],
            zIndex: 1,
          }}>
            <Header
              // leftFunction={() => this.props.navigation.openDrawer()}
              // IconLeft={{ name: "menu", type: "Ionicons" }}
              title={"Home"}
              NoNavHeader
            />
          </Animated.View>
          <Animated.ScrollView
            scrollEventThrottle={1}
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={{ zIndex: 0, height: "100%", elevation: -1 }}
            contentContainerStyle={{ paddingTop: NAVBAR_HEIGHT }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
              { useNativeDriver: true },
            )}
            overScrollMode="never">
            {this.state.configTab ?
              <Tab.Navigator
                tabBar={props => <Animated.View
                  style={{
                    transform: [{translateY: tabY}],
                    zIndex: 1,
                    width: "100%",
                    backgroundColor: Colors.white
                  }}><TabTop {...props} configTab={this.state.configTab} /></Animated.View>}
              >
                {this.state.configTab.map((item, index) => {
                  return (
                    <Tab.Screen name={item.screen} key={index}>
                      {/* {(props) => <SearchScreen {...props} />} */}
                      {(props) => <View style={{ height: 1600}}><Text>{item.screen}</Text></View>}
                    </Tab.Screen>
                  );
                })}
              </Tab.Navigator>
              : <View />}
          </Animated.ScrollView>
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
