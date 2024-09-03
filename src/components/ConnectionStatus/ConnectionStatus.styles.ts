import { StyleSheet } from "react-native";

export const connectionStatusStyles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    connectionType: {
        display: "flex",
        flexDirection: "row",
        columnGap: 10,
        alignItems: "center"
    },
    connectionSVG: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    connectionName: {
        color: "#fff",
        fontFamily: "Poppins-Bold",
        fontSize: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10
    },
    connectionDetails: {
        color: "white",
        fontSize: 10,
        fontWeight: "400",
        fontFamily: "Inter-Light",
    },
})