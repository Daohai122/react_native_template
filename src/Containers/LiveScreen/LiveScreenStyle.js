import { StyleSheet } from "react-native";
import { Colors, UtillSize } from "../../Themes";
const borderRadius = 5
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    wrapResult: {
        flex: 0.5,
        borderRadius: borderRadius,
        margin: UtillSize.margin,
        backgroundColor: Colors.white,
        shadowColor: Colors.margin,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1,
        // elevation: 2,
    },
    resultHeader: {
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius
    },
    textResultHeader: {
        padding: 5,
        fontSize: UtillSize.memSizeText,
        fontWeight: '500',
        // fontFamily: 'Apple',
        color: Colors.text
    },
    WrapContentResult: {
        flex: 1,
        margin: UtillSize.margin
    },
    resultElement: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        borderBottomColor: Colors.borderColor,
        borderBottomWidth: 1,
        fontSize: UtillSize.normalFontSize,
        paddingVertical: 7
    },
    wrapNumber: {
        backgroundColor: Colors.mainColor,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: borderRadius,
        width: 44,
        alignItems:'center'
    },
    colorNumber: {
        color: Colors.white
    },
    textListResult: {
        color: "#757575"
    }
    
});
export default styles;