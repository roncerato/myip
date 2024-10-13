import { NetInfoState } from "@react-native-community/netinfo";
import { IGlobalIP } from "../../types/globalIP";

export interface INetworkData{
    local: NetInfoState | undefined
    global: IGlobalIP | undefined
    flag: {uri: string} | undefined
}