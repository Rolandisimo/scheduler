import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export default StyleSheet.create({
    infoWrapper: {
        padding: 10,
    },
    infoHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    infoBody: {
        textAlign: "justify",
    },
    avatar: {
        borderRadius: 25,
        height: 50,
        width: 50,
    },
});