import { View, Text, FlatList, ScrollView } from "react-native";
import { localInfoStyles } from "./ListItem.style";
import { IListItem } from "./ListItem.props";


export default function ListItem({ name, value }: IListItem) {
     return (
        <View style={localInfoStyles.row}>
            <Text style={[localInfoStyles.text, localInfoStyles.name]}>
                {name}:
            </Text>
            <Text style={[localInfoStyles.text, localInfoStyles.value]}>
                {value}
            </Text>
        </View>
    )   
}

