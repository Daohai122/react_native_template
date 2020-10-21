import { StyleSheet } from "react-native";
import { Colors, UtillSize } from "../../Themes";
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapContent: {
       
    },
    headerSelect: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemList: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#768ac0',
        borderRadius: 15,
        marginHorizontal: 3
    },
    textItem: {
        color: Colors.white
    }
});
export default styles;