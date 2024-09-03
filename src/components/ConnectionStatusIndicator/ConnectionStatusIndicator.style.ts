import { StyleSheet } from "react-native";
export const connectionIndicatorStyles = StyleSheet.create({
    connectionStatusIndicator:{
        display: "flex",
        alignItems: "center" ,
        flexDirection: "row",
        columnGap: 4
    },
    connectionStatusIndicatorColor:{
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    connectionStatusIndicatorText:{
        color: "white"
    },
})