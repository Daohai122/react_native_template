import { StyleSheet } from "react-native";
import { Colors, UtillSize } from "../../Themes";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: UtillSize.margin,
        backgroundColor: Colors.white
    },
    wrapSelect: {
        paddingVertical: 5
    },
    lableView: {
        paddingBottom: 5,
        fontSize: UtillSize.titleFontSize,
        fontWeight: '400'
    },
    select: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#bdbdbd'
    }
});
export default styles;


