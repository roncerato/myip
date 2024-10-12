import { StyleSheet } from "react-native";

export const globalInfoStyles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: 18,
    },
    country: {
        display: "flex",
        flexDirection: "row",
        columnGap: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20
    },
    countryImg: {
        width: 40,
        height: 40,
        borderWidth: 0.5,
        borderColor: "#595959",
        borderRadius: 20,
    },
    countryName: {
        color: "#fff",
        fontFamily: "Poppins-Bold",
        fontSize: 30,
        display: "flex",
        flexDirection: "row",
        gap: 10
    },
    mainBlock: {
        flexDirection: "row",
        gap: 16,
    },
})