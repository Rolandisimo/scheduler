import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        shadowColor: "rgba(189, 195, 199, 0.7)",
        shadowOpacity: 1.0,
        shadowOffset: { height: 2 },
    },
});
