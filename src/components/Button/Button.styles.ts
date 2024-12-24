import { StyleSheet } from "react-native";
import { theme } from "../../constants/rootStyles";

export const buttonStyles = StyleSheet.create({
    btn: {
        backgroundColor: theme.dark.primaryColor,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 6,
        
    },
    text:{
        textAlign: "center",
        textTransform: "uppercase",
        color: "#fff",
        fontFamily: "Jost-ExtraBold"
    }
})