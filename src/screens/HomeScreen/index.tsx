import ConnectionStatus from "../../components/ConnectionStatus";
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { theme } from "../../constants/rootStyles";
import NetworkData from "../../components/NetworkData";
import NetFullDataCard from "../../components/NetFullDataCard";
import { IGlobalIP } from "../../types/globalIP";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
type Props = NativeStackScreenProps<HomeStack, "HomeScreen">

export default function HomeScreen({ navigation }: Props) {
  const [local, setLocal] = useState<NetInfoState | undefined>(undefined)
  const [global, setGlobal] = useState<IGlobalIP | undefined>(undefined)
  const [flag, setFlag] = useState<{ uri: string } | undefined>()
  const { i18n } = useTranslation();
  const { colors } = useTheme()
  const systemTheme = useColorScheme()
  //Локальный IP 
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setLocal(state)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Глобальный IP
  useEffect(() => {
    if (!!local?.isInternetReachable === true) {
      setFlag(undefined)
      fetch(`http://ip-api.com/json/?fields=66846719&lang=${i18n.language}`)
        .then(res => res.json() as Promise<IGlobalIP>)
        .then(data => {
          setFlag(undefined)
          setGlobal(data)
          if (data.countryCode == "TM") {
            setFlag(require("../../../assets/images/tm.png"))
          }
          else {
            setFlag({ uri: "https://flagcdn.com/h80/" + String(data.countryCode).toLowerCase() + ".png" })
          }
        })
        .catch(() => setGlobal(undefined))
    }
    else {
      setGlobal(undefined);
      setFlag(undefined)
    }
  }, [local])
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 36 }}
      style={[
        styles.container,
        { display: "flex", rowGap: 16 }]}>
      <StatusBar backgroundColor={colors.background} barStyle={systemTheme === "dark" ? "light-content" : "dark-content"} />
      <ConnectionStatus info={local} />
      <NetworkData local={local} global={global} flag={flag} />

      <View style={{
        paddingVertical: 16,
        gap: 16,
      }}>
        <NetFullDataCard isLocal={true} navigation={navigation} ipData={local} isConnected={!local?.isInternetReachable} />
        <NetFullDataCard isLocal={false} navigation={navigation} ipData={global} flag={flag} isConnected={!local?.isInternetReachable} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: 18,
  },
  infoSection: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginTop: 36
  },

})