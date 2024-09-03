import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

type Props = NativeStackScreenProps<HomeStack>

export default function DetailsInfoScreen({navigation}: Props){
    return (
        <View>
            <Text>
                Информация
            </Text>
            <Button title="Back" onPress={()=>navigation.goBack()}/>
        </View>
    )
}