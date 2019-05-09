import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 15
    },
    container: {
        backgroundColor: '#F5FCFF',
    },
    slider: {backgroundColor: '#000'},
    content1: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    content2: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        width: '100%',
        marginTop: 10,
    },
    contentText: {color: '#fff', fontSize: 25},
    contentTextSubsection: {fontSize: 15, fontWeight:'bold', marginBottom:3},
    contentTextByline: {fontSize: 20,marginBottom:3},
    contentText2: {fontSize: 15},
    contentText3: {textAlign: 'right', fontSize: 15, alignItems: 'flex-end'},
    buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        margin: 3,
        width: 10,
        height: 10,
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 5
    },
    buttonPressed: {
        margin: 3,
        width: 10,
        height: 10,
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 5
    },
    buttonSelected: {
        opacity: 1,
        color: 'red',
    },
    customSlide: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    customImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});