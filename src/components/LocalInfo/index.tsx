import { useEffect, useState } from "react";
import { ILocalInfo } from "./LocalInfo.props";
import { View, Text, FlatList, ScrollView } from "react-native";
import { localInfoStyles } from "./LocalInfo.style";
import ListItem from "../ListItem";
import WifiIcon from "../../../assets/images/svg/connectionType/wifi.svg"
import MainBlock from "../MainBlock";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";

export default function LocalInfo({ data }: ILocalInfo) {
    const symbol = "\u2014";
    const [ip, setIp] = useState<string>(symbol)
    const [ssid, setSsid] = useState<string>(symbol)
    const [frequency, setFrequency] = useState<string>(symbol)
    const [subnet, setSubnet] = useState<string>(symbol)
    const [bssid, setBssid] = useState<string>(symbol)
    const [strength, setStrength] = useState<string>(symbol)
    const { t } = useTranslation();
    const { colors } = useTheme()
    useEffect(() => {
        if (data && data.type === "wifi") {

            setIp(data.details.ipAddress!)
            setSsid(data.details.ssid || "Wi-Fi")
            setFrequency(`${Number(data.details.frequency! / 1000).toString().slice(0, 3)} GHz`)
            setSubnet(data.details.subnet!)
            setBssid(data.details.bssid!)
            setStrength(String(data.details.strength!) + "%")
        }
        else {
            setIp(symbol)
            setSsid(symbol)
            setFrequency(symbol)
            setSubnet(symbol)
            setBssid(symbol)
            setStrength(symbol)
        }
    }, [data])

    return (
        <ScrollView>
            <View style={localInfoStyles.container}>
                <View style={localInfoStyles.connectionType}>
                    <View style={localInfoStyles.connectionSVG}>

                        <WifiIcon fill={colors.text} />
                    </View>

                    <Text style={[localInfoStyles.connectionName, { color: colors.text }]}>
                        {ssid}
                    </Text>

                </View>
                <View style={localInfoStyles.mainBlock}>

                    <MainBlock name={t("details_screen.local_info.ip")} value={ip} />
                    <MainBlock name={t("details_screen.local_info.subnet_mask")} value={subnet} />

                </View>
                <ListItem name={t("details_screen.local_info.frequency")} value={frequency} />
                <ListItem name={t("details_screen.local_info.wifi_mac_address")} value={bssid} />
                <ListItem name={t("details_screen.local_info.signal_level")} value={strength} />
            </View>
        </ScrollView>
    )
}

