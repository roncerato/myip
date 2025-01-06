import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import ListItem from "../ListItem";
import { globalInfoStyles } from "./GlobalInfo.style";
import MainBlock from "../MainBlock";
import { IGlobalInfo } from "./GlobalInfo.props";
import { theme } from "../../constants/rootStyles";
import { ipInfoStyles } from "../IPInfo/IPInfo.style";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";


export default function GlobalInfo({ data, flag }: IGlobalInfo) {
    const { t } = useTranslation();
    const { colors } = useTheme()
    return (
        <ScrollView>
            <View style={globalInfoStyles.container}>
                <View style={globalInfoStyles.country}>
                    <View
                        style={[

                            ipInfoStyles.flag,
                            { backgroundColor: theme.dark.primaryColor },
                            ipInfoStyles.image
                        ]}
                    >
                        {
                            flag !== undefined ? <Image source={flag} style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                            /> : null
                        }
                    </View>

                    <Text style={[globalInfoStyles.countryName, { color: colors.text }]}>
                        {data?.country}
                    </Text>

                </View>
                <MainBlock name={t("details_screen.global_info.ip")} value={data?.query} />

                <View style={globalInfoStyles.mainBlock}>
                    <MainBlock name={t("details_screen.global_info.latitude")} value={String(data?.lat)} />
                    <MainBlock name={t("details_screen.global_info.longitude")} value={String(data?.lon)} />
                </View>

                <ListItem name={t("details_screen.global_info.provider")} value={data?.asname} />
                <ListItem name={t("details_screen.global_info.proxy")} value={data?.proxy ? t("details_screen.global_info.used") : t("details_screen.global_info.not_used")} />
                <ListItem name={t("details_screen.global_info.city")} value={data?.city} />
                <ListItem name={t("details_screen.global_info.continent")} value={data?.continent} />
                <ListItem name={t("details_screen.global_info.country_code")} value={data?.countryCode} />
            </View>
        </ScrollView>
    )
}
