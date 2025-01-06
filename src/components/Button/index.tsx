import { Text, TouchableOpacity } from "react-native";
import { IButton } from "./Button.props";
import { buttonStyles } from "./Button.styles";
import { useTheme } from "@react-navigation/native";

export default function Button({ text, fullWidth = true, isBGDark = false, ...props }: IButton) {
    const { colors } = useTheme()
    return (
        <TouchableOpacity {...props} style={[buttonStyles.btn, { backgroundColor: colors.primary }, fullWidth ? { alignSelf: "stretch" } : { alignSelf: "flex-end" }, isBGDark ? { backgroundColor: "#0f63ff9c" } : {}]}>
            <Text style={buttonStyles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
