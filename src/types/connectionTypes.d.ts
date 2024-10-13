import { NetInfoState } from "@react-native-community/netinfo";
import { IGlobalIP } from "./globalIP";

interface ILocalConnection {
    isLocal: true
    ipData: NetInfoState | undefined,
    flag?: undefined
  }

interface IGlobalConnection {
    isLocal: false,
    ipData: IGlobalIP |undefined
    flag: {uri: string} | undefined
  }