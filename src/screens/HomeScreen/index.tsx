import ConnectionStatus from "../../components/ConnectionStatus";
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View
} from 'react-native';
import NetInfo, { NetInfoCellularGeneration, NetInfoState, NetInfoStateType, NetInfoWifiState } from "@react-native-community/netinfo";
import { ConnectionType, IConnectionStatus } from "../../components/ConnectionStatus/ConnectionStatus.props";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { theme } from "../../constants/rootStyles";

type Props = NativeStackScreenProps<HomeStack>

export default function HomeScreen({ navigation }: Props) {
  const [info, setInfo] = useState<NetInfoState>()

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setInfo(state)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 36 }}
      style={[
        styles.container,
        { display: "flex", rowGap: 16 }]}>
      <StatusBar backgroundColor={theme.dark.background} barStyle={"light-content"} />
      <ConnectionStatus info={info}/>
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