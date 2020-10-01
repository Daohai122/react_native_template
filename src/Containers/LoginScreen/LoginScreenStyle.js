import { StyleSheet } from "react-native";
import { Colors, UtillSize } from "../../Themes";
const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    button: {
        paddingHorizontal:15,
        paddingVertical:10,
        borderWidth:0.7,
        borderColor: 'red',
        borderRadius: 8,
        alignSelf:'center'
    },
    wrapHeader: {
        justifyContent:'center',
        alignItems:'center'
    },
    textTitleHeader: {
        fontFamily:'Optima-Regular',
        letterSpacing: 3,
        fontWeight: 'bold',
        color:'#fff'
    },
    textDesHeader: {
        color: '#fff',
        letterSpacing: 5
    },
    wrapViewContent: {
        marginHorizontal: UtillSize.marginLogin
    },
    viewInput: {
        height: UtillSize.heightInput,
        borderRadius: 10,
        borderWidth:1,
        borderColor: Colors.boderInput,
        marginBottom: 15,
        backgroundColor: Colors.backgroundInput
    },
    ButtonLogin: {
        backgroundColor: Colors.mainColor,
        height: UtillSize.heightInput,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    wrapTextForgot: {
        paddingVertical: 10,
        marginBottom: 10,
        alignItems:'flex-end'
    },
    textForGot: {
        color: "#fff",
        fontSize: UtillSize.memSizeText
    },
    textLogin: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: UtillSize.titleFontSize
    }
});
export default styles;