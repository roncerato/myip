import { StyleSheet } from "react-native";
import { theme } from "../../constants/rootStyles";

export const ipInfoStyles = StyleSheet.create({
    block: {
        backgroundColor: theme.dark.secondary,
        borderRadius: 6,
        padding: 20,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: 18,
        alignItems: "center"
    },
    title: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "Jost-Regular"
    },
    flag: {
        borderRadius: 50,
        overflow: "hidden"
    },
    image: {
        width: 40,
        aspectRatio: "1/1",
    },
    ip: {
        color: "#fff",
        fontFamily: "Jost-Bold"
    }
})