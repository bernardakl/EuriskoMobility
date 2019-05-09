import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    scrollViewStyle: {
        flexGrow: 1,
        height: null,
        width: null
    },

    separator: {
        flex: 1,

        height: 5,

        backgroundColor: "#eeeeee"
    },
    input: {
        height: Platform.OS === "ios" ? 30 : 38,
        // height: ((Platform.OS === 'ios') ? 30 : 38),
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: "#eaebed",
        borderRadius: 2,
        ...Platform.select({
            android: {
                paddingBottom: 9
            }
        })
        //fontFamily:'Zetta Serif'
    }
});
