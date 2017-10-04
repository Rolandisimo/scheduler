import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export default StyleSheet.create({
    post: {
        flexDirection: "column",
        flex: 1,
        width: null,
        alignSelf: "stretch",
        marginTop: 10,
        marginBottom: 10,
        shadowColor: "rgba(189, 195, 199, 0.7)",
        shadowOpacity: 1.0,
        shadowOffset: { height: 2 },
    },
    postImage: {
        flex: 1,
        height: (Dimensions.get("window").height / 1.5),
    },
    postStatus: {
        flex: 1,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
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
    breakline: {
        height: 1,
        width: Dimensions.get("window").width / 10,
        backgroundColor: "rgba(189, 195, 199, 0.7)",
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center",
    },
    smallTitle: {
        fontSize: 20,
        color: "#34495e",
    },
    buttonMain: {
        borderWidth: 1,
        borderColor: "rgba(46, 204, 113, .8)",
        padding: 10,
        borderRadius: 5,
    },
});