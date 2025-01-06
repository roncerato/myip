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
import { useTheme } from "@react-navigation/native";

export default function IPInfo({ isLocal, data, flag }: ILocalInterface | IGlobalInterface) {

    const { t } = useTranslation();
    const emDash = "\u2014"
    const [ip, setIP] = useState<string>(emDash);
    const { colors } = useTheme()
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
        <View style={[ipInfoStyles.block, { backgroundColor: colors.card }]}>
            <Text style={[ipInfoStyles.title, { color: colors.text }]}>
                {isLocal ? t("homescreen.local_ip") : t("homescreen.global_ip")}:
            </Text>
            <View
                style={[
                    !isLocal && [
                        ipInfoStyles.flag,
                        { backgroundColor: colors.primary }
                    ],
                    ipInfoStyles.image]}
            >
                {
                    isLocal ? <Router fill={colors.primary} /> :

                        flag !== undefined ? <Image source={flag} style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                        /> : null
                }
            </View>
            <Text style={[ipInfoStyles.ip, { color: colors.text }]}>
                {ip}
            </Text>
        </View>
    )
}
