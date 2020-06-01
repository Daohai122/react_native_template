import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NavHeader, Header} from '../../Components/Header';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Tabs,
  Tab,
  TabHeading,
} from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Colors} from '../../Themes';
import TabIcon from '../../Components/TabIcon/TabIcon';
import DrawerContent from "../../Components/DrawerContent/DrawerContent";

const Drawer = createDrawerNavigator();
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexTabActive: 0,
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <NavHeader />
        <SafeAreaView style={{flex: 1}}>
          <Header
            leftFunction={() => this.props.navigation.openDrawer()}
            IconLeft={{name: 'menu', type: 'Ionicons'}}
            title={'Bệnh án điện tử'}
            NoNavHeader
          />
          <Tabs
            tabBarUnderlineStyle={{backgroundColor: '#fff'}}
            tabBarPosition="bottom"
            tabContainerStyle={[{height: 65}, styles.tabBar]}
            onChangeTab={({i}) => this.setState({indexTabActive: i})}>
            <Tab
              heading={
                <TabHeading style={styles.tabItem}>
                  <TabIcon
                    content={{
                      nameIcon: 'md-time',
                      typeIcon: 'Ionicons',
                      title: 'Chờ ký',
                      number: '12',
                      isActive: this.state.indexTabActive == 0,
                    }}
                  />
                </TabHeading>
              }>
              <View style={{flex: 1}}>
                <ScrollView>
                  <Text>Nooij dung</Text>
                </ScrollView>
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tabItem}>
                  <TabIcon
                    content={{
                      nameIcon: 'remove',
                      typeIcon: 'FontAwesome',
                      title: 'Từ chối',
                      number: '13',
                      isActive: this.state.indexTabActive == 1,
                    }}
                  />
                </TabHeading>
              }>
              <View>
                <Text>ok 3</Text>
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tabItem}>
                  <TabIcon
                    content={{
                      nameIcon: 'checklist',
                      typeIcon: 'Octicons',
                      title: 'Đã ký',
                      number: '31',
                      isActive: this.state.indexTabActive == 2,
                    }}
                  />
                </TabHeading>
              }>
              <View>
                <Text>ok 3</Text>
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tabItem}>
                  <TabIcon
                    content={{
                      nameIcon: 'user-tie',
                      typeIcon: 'FontAwesome5',
                      title: 'Tôi tạo',
                      number: '30',
                      isActive: this.state.indexTabActive == 3,
                    }}
                  />
                </TabHeading>
              }>
              <View>
                <Text>ok 4</Text>
              </View>
            </Tab>
          </Tabs>
        </SafeAreaView>
      </View>
    );
  }
}

const HomeScreenStack = () => {
  return (
    <Drawer.Navigator drawerContent={() =><DrawerContent/>} initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#fff',
    shadowColor: Colors.mainColor,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  tabItem: {
    backgroundColor: '#fff',
  },
});
export default HomeScreenStack;
