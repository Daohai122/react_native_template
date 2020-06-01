import { StyleSheet } from "react-native";
import { Colors } from "../../Themes";
const styles = StyleSheet.create({
    Container: {
        flex:1, 
    },
    button: {
        paddingHorizontal:15,
        paddingVertical:10,
        borderWidth:0.7,
        borderColor: 'red',
        borderRadius: 8,
        alignSelf:'center'
    },
    text: {
        fontSize: 18,
        color:'red'
    }
});
export default styles;