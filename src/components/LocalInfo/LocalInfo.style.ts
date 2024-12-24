import { StyleSheet } from "react-native";

export const localInfoStyles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: 18,
    },
    connectionType: {
        display: "flex",
        flexDirection: "row",
        columnGap: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20
    },
    connectionSVG: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    connectionName: {
        color: "#fff",
        fontFamily: "Poppins-Bold",
        fontSize: 30,
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
    mainBlock: {
        flexDirection: "row",
        gap: 16,
    },
})