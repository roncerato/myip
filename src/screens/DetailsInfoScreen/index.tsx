import { RouteProp, useRoute, useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import { IGlobalConnection, ILocalConnection } from "../../types/connectionTypes";
import { theme } from "../../constants/rootStyles";
import BackIcon from "../../../assets/images/svg/back.svg"
import RefreshIcon from "../../../assets/images/svg/refresh.svg"
import LocalInfo from "../../components/LocalInfo";
import GlobalInfo from "../../components/GlobalInfo";
type Props = NativeStackScreenProps<HomeStack, "DetailsInfoScreen">
type DetailsInfoScreenRouteProp = RouteProp<HomeStack, "DetailsInfoScreen">

export default function DetailsInfoScreen({ navigation }: Props) {
    const router = useRoute<DetailsInfoScreenRouteProp>();
    const { isLocal, ipData, flag } = router.params as ILocalConnection | IGlobalConnection
    const { colors } = useTheme()
    return (
        <View>
            <View style={{
                paddingHorizontal: 10,
                paddingVertical: 14,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon width={22} height={22} fill={colors.secondText} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <RefreshIcon width={26} height={26} fill={colors.secondText} />
                </TouchableOpacity>
            </View>
            {
                isLocal ?
                    <LocalInfo data={ipData} /> :
                    <GlobalInfo data={ipData} flag={flag} />
            }
        </View>
    )
}