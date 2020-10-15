import { StyleSheet } from "react-native";
import {UtillSize, Colors} from '../../Themes';
const borderRadius = 5

 const styles = StyleSheet.create({
    container: {
        flex:1, 
        marginTop: UtillSize.headerHeight, 
        backgroundColor: Colors.white
    },
    Content: {
        flex: 1,
        borderRadius: borderRadius,
        // margin: UtillSize.margin,
        backgroundColor: Colors.white,
        shadowColor: Colors.margin,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1,
        marginTop: 15
    },
    headerlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    TextHeadeList: {
        fontWeight: '500',
        fontSize: 16
    },
    boxItemElementNo: {
        width: 55,
        justifyContent:'center',
        alignItems: 'center'
    },
    boxItemElement: {
        width: (UtillSize.screenWidth -55)/3,
        justifyContent:'center',
        alignItems: 'center'
    },
    
    Item: {

    },
    headerItem: {
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    ItemContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    textNumber: {
        fontSize: 16,
        fontWeight: '600'
    },
    selectDate: {
        width: UtillSize.screenWidth - 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems:'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#bdbdbd'
    },
    labelView: {
        width: 60
    },
    wrapSelectDate: {
        flexDirection:'row',
        alignItems:'center'
    }
})
export default  styles;