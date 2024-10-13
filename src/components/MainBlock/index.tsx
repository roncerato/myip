import { View, Text, FlatList, ScrollView } from "react-native";
import { mainBlockStyles } from "./MainBlock.style";
import { IMainBlock } from "./MainBlock.props";


export default function MainBlock({ name, value }: IMainBlock) {
    const emDash = "\u2014"
    return (
        <View style={mainBlockStyles.mainData}>
            <Text style={mainBlockStyles.name}>
                {name}
            </Text>
            <Text style={mainBlockStyles.value}>
                {value || emDash}
            </Text>
        </View>

    )
}

