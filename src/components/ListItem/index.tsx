import { View, Text, FlatList, ScrollView } from "react-native";
import { localInfoStyles } from "./ListItem.style";
import { IListItem } from "./ListItem.props";
import { useTheme } from "@react-navigation/native";


export default function ListItem({ name, value }: IListItem) {
    const { colors } = useTheme()
    const emDash = "\u2014"
    return (
        <View style={[localInfoStyles.row, { backgroundColor: colors.card }]}>
            <Text style={[localInfoStyles.text, localInfoStyles.name, { color: colors.secondText }]}>
                {name}:
            </Text>
            <Text style={[localInfoStyles.text, localInfoStyles.value, { color: colors.text }]}>
                {value || emDash}
            </Text>
        </View>
    )
}

