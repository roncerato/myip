import { Text, TouchableOpacity } from "react-native";
import { IButton } from "./Button.props";
import { buttonStyles } from "./Button.styles";

export default function Button({ text, fullWidth=true, ...props}: IButton) {
    return (
        <TouchableOpacity {...props} style={[buttonStyles.btn, fullWidth ? {alignSelf: "stretch"} : {alignSelf: "flex-end"}]}>
            <Text style={buttonStyles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
