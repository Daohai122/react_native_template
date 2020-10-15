import { StyleSheet } from "react-native";
import { Colors, UtillSize } from "../../Themes";
const borderRadius = 5;
const widthSearch = 45;
const styles = StyleSheet.create({
    wrapContent: {
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
    },
    contentHeader: {
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius
    },
    textContentHeader: {
        padding: 5,
        fontSize: UtillSize.memSizeText,
        fontWeight: '500',
        // fontFamily: 'Apple',
        color: Colors.text
    },
    styleChart: {
        height: '100%', 
        paddingVertical: 10
    },
    wrapSearch: {
        opacity: 0.7,
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    buttonSearch: {
        backgroundColor: Colors.mainColor,
        width: widthSearch,
        height: widthSearch,
        borderRadius: widthSearch,
        justifyContent:'center',
        alignItems: 'center'
    }
})
export default styles;