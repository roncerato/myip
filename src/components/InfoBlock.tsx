import { StyleSheet, Text, View } from "react-native";

interface IProps {
    isFlag: boolean
    title: string
    ip: string
    svg?: string 
}
export default function InfoBlock({ isFlag, title, ip, svg }: IProps) {
    return (
        <View style={styles.block}>
            <Text style={styles.title}> {title} :</Text>
            <View style={[isFlag && styles.flag, styles.image]}></View>
            <Text style={styles.ip}>{ip}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        backgroundColor: "#282828",
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
        fontSize: 12
    },
    flag: {
        borderRadius: 50
    },
    image: {
        width: 40,
        aspectRatio: "1/1",
        backgroundColor: "red",
    },
    ip: {
        color: "#fff",
        fontWeight: "700"
    }
})