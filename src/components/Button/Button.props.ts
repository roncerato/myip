import { TouchableOpacityProps } from "react-native"

export interface IButton extends TouchableOpacityProps {
    text: string
    fullWidth?: boolean,
    isBGDark?: boolean
}