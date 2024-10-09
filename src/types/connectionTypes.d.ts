import { NetInfoState } from "@react-native-community/netinfo";

interface ILocalConnection {
    isLocal: true
    ipData: NetInfoState | undefined
  }

interface IGlobalConnection {
    isLocal: false,
    ipData: undefined
  }