import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface IProps extends TouchableOpacityProps {
    text: string
    fullWidth?: boolean
}

export default function Button({ text, fullWidth=true, ...props}: IProps) {
    return (
        <TouchableOpacity {...props} style={[styles.btn, fullWidth ? {alignSelf: "stretch"} : {alignSelf: "flex-end"}]}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#6C8CC7",
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 6,
        
    },
    text:{
        textAlign: "center",
        fontWeight: "800",
        textTransform: "uppercase",
        color: "#fff"
    }
})