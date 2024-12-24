import { StyleSheet } from "react-native";
import { theme } from "../../constants/rootStyles";

export const netFullDataCardStyles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: theme.dark.secondary,
        rowGap: 20,
        borderRadius: 6

    },
    title: {
        color: "#fff",
        textTransform: "uppercase",
        fontFamily: "Jost-Bold"
    },
    descriptionImg: {
        columnGap: 18,
        flexDirection: "row",
        alignItems: "center",
    },
    img: {
        width: 50,
        aspectRatio: "1/1",
    },
    description: {
        color: "#fff",
        flexShrink: 1,
        fontSize: 14,
        lineHeight: 23,
        fontFamily: "Jost-Regular"
    },
})