import { StyleSheet } from "react-native";
import { theme } from "../../constants/rootStyles";


export const localInfoStyles = StyleSheet.create({
    row:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.dark.secondary,
        borderRadius: 6,
        padding: 16,
        paddingVertical: 18,
    },
    text: {
        color: theme.dark.textColor,
    },
    name: {
        fontFamily: "Jost-Regular",
        color: theme.dark.lightgrey
    },
    value: {
        fontFamily: "Jost-Bold"
    },

})