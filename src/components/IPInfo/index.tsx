import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/rootStyles";
import { ipInfoStyles } from "./IPInfo.style";
import { IIPInfo } from "./IPInfo.props";
import { useEffect, useState } from "react";
import { IGlobalIP } from "../../types/globalIP";
import { SvgProps, SvgUri } from "react-native-svg";
import Router from "../../../assets/images/svg/router.svg"
import React from "react";

export default function IPInfo({ info, isLocal }: IIPInfo) {

    const [title, setTitle] = useState<"Локальный IP" | "Глобальный IP">(() => isLocal ? "Локальный IP" : "Глобальный IP")
    const [ip, setIP] = useState<string>("\u2014");
    const pref = "us"
    const [flag, setFlag] = useState<{uri: string}>();

    
    useEffect(() => {
        setIP("\u2014")
        setFlag(undefined)
        if (isLocal) {
            if (info?.type !== "wifi") {
                setIP("\u2014")
            }
            else {
                if (info.details.ipAddress) {
                    setIP(info.details.ipAddress)
                }
                else {
                    setIP("\u2014")
                }
            }
        }
        else {
            fetch("http://ip-api.com/json/?fields=66846719&lang=ru")
                .then(res => res.json() as Promise<IGlobalIP>)
                .then(data => {
                    setIP(data.query)
                    if (data.countryCode == "TM") {
                        setFlag(require("../../../assets/images/tm.png"))
                    }
                    else {
                        setFlag({ uri: "https://flagcdn.com/h80/" + String(data.countryCode).toLowerCase() + ".png" })
                    }
                })
                .catch(() => setIP("\u2014"))
        }
    }, [info, isLocal])

    return (
        <View style={ipInfoStyles.block}>
            <Text style={ipInfoStyles.title}>
                {title}:
            </Text>
            <View
                style={[
                   !isLocal && [
                        ipInfoStyles.flag,
                        { backgroundColor: theme.dark.primaryColor }
                    ],
                    ipInfoStyles.image]}
            >
                {
                    isLocal ? <Router fill={theme.dark.primaryColor}/> :

                    flag !== undefined ? <Image  source={flag} style={{width: "100%", height: "100%", resizeMode: "cover"}} 
                    /> : null
                }
            </View>
            <Text style={ipInfoStyles.ip}>
                {ip}
            </Text>
        </View>
    )
}
