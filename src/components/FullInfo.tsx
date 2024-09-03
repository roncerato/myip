import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Button from "./Button";

interface IProps {
    title: string,
    img: string
    description: string
}

export default function FullInfo({ title, img, description }: IProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.descriptionImg}>
                <View style={styles.img}>
                </View>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
            <View>
                <Button text="Подробнее" fullWidth={false} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#282828",
        rowGap: 20,
        borderRadius: 6

    },
    title: {
        color: "#fff",
        fontWeight: "700",
        textTransform: "uppercase"
    },
    descriptionImg: {
        columnGap: 18,
        flexDirection: "row",
        alignItems: "center"
    },
    img: {
        width: 40,
        aspectRatio: "1/1",
        backgroundColor: "red",
    },
    description: {
        color: "#fff",
        flexShrink: 1,
        fontSize: 14,
        lineHeight: 23,
    },
})