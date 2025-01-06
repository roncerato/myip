import { View, Text, FlatList, ScrollView } from "react-native";
import { mainBlockStyles } from "./MainBlock.style";
import { IMainBlock } from "./MainBlock.props";
import { useTheme } from "@react-navigation/native";


export default function MainBlock({ name, value }: IMainBlock) {
    const emDash = "\u2014"
    const { colors } = useTheme()
    return (
        <View style={[mainBlockStyles.mainData, { backgroundColor: colors.card }]}>
            <Text style={[mainBlockStyles.name, { color: colors.secondText }]}>
                {name}
            </Text>
            <Text style={[mainBlockStyles.value, { color: colors.text }]}>
                {value || emDash}
            </Text>
        </View>

    )
}

