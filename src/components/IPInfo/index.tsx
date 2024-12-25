import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/rootStyles";
import { ipInfoStyles } from "./IPInfo.style";
import { IGlobalInterface, ILocalInterface } from "./IPInfo.props";
import { useEffect, useState } from "react";
import { IGlobalIP } from "../../types/globalIP";
import { SvgProps, SvgUri } from "react-native-svg";
import Router from "../../../assets/images/svg/router.svg"
import React from "react";
import { useTranslation } from "react-i18next";

export default function IPInfo({ isLocal, data, flag }: ILocalInterface | IGlobalInterface) {

    const { t } = useTranslation();
    const emDash = "\u2014"
    const [ip, setIP] = useState<string>(emDash);

    useEffect(() => {
        if (isLocal) {
            if (data?.type === "wifi" || data?.type === "ethernet") {
                setIP(data.details.ipAddress || emDash);
            } else {
                setIP(emDash);
            }
        } else {
            setIP(data?.query || emDash);
        }
    }, [data]);
    

    return (
        <View style={ipInfoStyles.block}>
            <Text style={ipInfoStyles.title}>
                {isLocal ? t("homescreen.local_ip") : t("homescreen.global_ip")}:
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
                    isLocal ? <Router fill={theme.dark.primaryColor} /> :

                        flag !== undefined ? <Image source={flag} style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                        /> : null
                }
            </View>
            <Text style={ipInfoStyles.ip}>
                {ip}
            </Text>
        </View>
    )
}
