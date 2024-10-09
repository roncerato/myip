import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../Button";
import { netFullDataCardStyles } from "./NetFullDataCard.style";
import { NetFullDataCardProps } from "./NetFullDataCard.props";
import GlobalInf from "../../../assets/images/svg/globalInf.svg"
import LocalInf from "../../../assets/images/svg/localInf.svg"
import { theme } from "../../constants/rootStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";



export default function NetFullDataCard({ isLocal, navigation, ipData }: NetFullDataCardProps) {
    return (
        <View style={netFullDataCardStyles.container}>
            <Text style={netFullDataCardStyles.title}>
                {isLocal ? "Сетевые данные" : "IP-данные"}:
            </Text>
            <View style={netFullDataCardStyles.descriptionImg}>
                <View style={netFullDataCardStyles.img}>
                    {
                        isLocal ?
                            <LocalInf fill={theme.dark.primaryColor}/> :
                            <GlobalInf width={50} height={50} fill={theme.dark.primaryColor}/>
                    }
                </View>
                <Text style={netFullDataCardStyles.description}>
                    {isLocal
                        ? "Данные о локальном IP-адресе, MAC-адресе, DNS, и т.д."
                        : "Подробная информация на основе вашего IP-адреса"}
                </Text>
            </View>
            <View>
                <Button text="Подробнее" fullWidth={false} onPress={()=>
                    navigation.navigate("DetailsInfoScreen",{
                        isLocal: isLocal,
                        ipData: ipData
                    })
                    }/>
            </View>
        </View>
    )
}
