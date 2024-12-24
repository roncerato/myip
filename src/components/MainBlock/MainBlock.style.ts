import { StyleSheet } from "react-native";
import { theme } from "../../constants/rootStyles";


export const mainBlockStyles = StyleSheet.create({
     mainData: {
        backgroundColor: theme.dark.secondary,
        borderRadius: 6,
        padding: 20,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: 6,
        alignItems: "center"
    },
    name: {
        fontFamily: "Jost-Regular",
        color: theme.dark.lightgrey
    },
    value: {
        fontFamily: "Jost-Bold",
        color: theme.dark.textColor
    },

})