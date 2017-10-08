import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    post: {
        flexDirection: "column",
        flex: 1,
        width: null,
        padding: 20,
        backgroundColor: "rgba(236, 240, 241,1.0)",
        marginBottom: 20,
    },
    input: {
        // height: 100,
        borderBottomWidth: 1,
        borderColor: "rgba(127, 140, 141,.7)",
        borderRadius: 2,
        padding: 10,
        fontSize: 14,
        backgroundColor: "#fff",
    },
    formGroup: {
        margin: 10,
    },
    label: {
        marginBottom: 5,
    },
    formGroupSub: {
        marginTop: 5,
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
    },
    editIcon: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10,
        backgroundColor: "transparent",
    }
});
