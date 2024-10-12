import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { IGlobalConnection, ILocalConnection } from "../../types/connectionTypes";

type Props = NativeStackScreenProps<HomeStack, "DetailsInfoScreen">
type DetailsInfoScreenRouteProp = RouteProp<HomeStack, "DetailsInfoScreen">

export default function DetailsInfoScreen({ navigation }: Props) {
    const router = useRoute<DetailsInfoScreenRouteProp>();
    const { isLocal, ipData } = router.params as ILocalConnection | IGlobalConnection
   

    return (
        <View>
        </View>
    )
}