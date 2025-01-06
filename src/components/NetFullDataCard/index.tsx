import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../Button";
import { netFullDataCardStyles } from "./NetFullDataCard.style";
import { NetFullDataCardProps } from "./NetFullDataCard.props";
import GlobalInf from "../../../assets/images/svg/globalInf.svg"
import LocalInf from "../../../assets/images/svg/localInf.svg"
import { theme } from "../../constants/rootStyles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";

export default function NetFullDataCard({ isLocal, navigation, ipData, flag, isConnected }: NetFullDataCardProps) {
    const { t } = useTranslation();
    const { colors } = useTheme()
    return (
        <View style={[netFullDataCardStyles.container, { backgroundColor: colors.card }]}>
            <Text style={[netFullDataCardStyles.title, { color: colors.text }]}>
                {isLocal ? t("homescreen.network_data") : t("homescreen.ip_data")}:
            </Text>
            <View style={netFullDataCardStyles.descriptionImg}>
                <View style={netFullDataCardStyles.img}>
                    {
                        isLocal ?
                            <LocalInf fill={colors.primary} /> :
                            <GlobalInf width={50} height={50} fill={colors.primary} />
                    }
                </View>
                <Text style={[netFullDataCardStyles.description, { color: colors.text }]}>
                    {isLocal
                        ? t("homescreen.local_ip_info")
                        : t("homescreen.detailed_info")}
                </Text>
            </View>
            <View>
                <Button text={t("homescreen.more_details")} fullWidth={false} disabled={isConnected} isBGDark={isConnected} onPress={() =>
                    navigation.navigate("DetailsInfoScreen", {
                        isLocal: isLocal,
                        ipData: ipData,
                        flag: flag
                    })
                } />
            </View>
        </View>
    )
}
