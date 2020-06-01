import { StyleSheet } from "react-native";
import  {Colors , UtillSize} from "../../Themes";

const styles = StyleSheet.create({
    navBar: {
        height: UtillSize.navBarHeight,
        backgroundColor: Colors.colorNav,
    },
    viewHeader: {
      height: UtillSize.headerHeight,
      width: UtillSize.screenWidth,
      backgroundColor: Colors.mainColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      borderBottomColor: '#ddd',
    },
    IconLeft: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: 46,
    },
    ContentHeader: {
      justifyContent: 'center',
    },
});

export default styles