import { NetInfoState } from "@react-native-community/netinfo"
import { SvgProps } from "react-native-svg"

export interface IIPInfo{
    info: NetInfoState | undefined
    isLocal: boolean
}
