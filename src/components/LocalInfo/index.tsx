import { useEffect, useState } from "react";
import { ILocalInfo } from "./LocalInfo.props";
import { View, Text, FlatList, ScrollView } from "react-native";
import { localInfoStyles } from "./LocalInfo.style";
import ListItem from "../ListItem";
import WifiIcon from "../../../assets/images/svg/connectionType/wifi.svg"
import MainBlock from "../MainBlock";

export default function LocalInfo({ data }: ILocalInfo) {
    const symbol = "\u2014";
    const [ip, setIp] = useState<string>(symbol)
    const [ssid, setSsid] = useState<string>(symbol)
    const [frequency, setFrequency] = useState<string>(symbol)
    const [subnet, setSubnet] = useState<string>(symbol)
    const [bssid, setBssid] = useState<string>(symbol)
    const [strength, setStrength] = useState<string>(symbol)

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

                        <WifiIcon fill={"#fff"} />
                    </View>

                    <Text style={localInfoStyles.connectionName}>
                        {ssid}
                    </Text>

                </View>
                <View style={localInfoStyles.mainBlock}>

                    <MainBlock name={"IP"} value={ip} />
                    <MainBlock name={"Маска подсети"} value={subnet} />

                </View>
                <ListItem name={"Частота"} value={frequency} />
                <ListItem name={"MAC-адрес WI-FI"} value={bssid} />
                <ListItem name={"Уровень сигнала"} value={strength} />
            </View>
        </ScrollView>
    )
}

