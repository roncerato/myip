import { StyleSheet } from "react-native";
import { theme } from "../../constants/rootStyles";


export const langDropdownStyles = StyleSheet.create({
    container: {
        alignSelf: "flex-start",
        width: 68,
    },
    dropdownSelectedText: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "Jost-Bold"
    },
    dropdownSelected: {
        borderColor: theme.dark.lightgrey,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginBottom: 4,
        justifyContent: "space-between"
    },
    dropdownContainer: {
        borderColor: theme.dark.lightgrey,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        gap: 10,
    },
    dropdownItemText: {
        color: theme.dark.lightgrey,
        fontSize: 12,
        fontFamily: "Jost-Regular"
    },
    dropdownItemIcon: {
        overflow: "hidden",
        width: 20,
        height: 20,
        borderRadius: 10,
    }

});