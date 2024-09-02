import { NetInfoState } from "@react-native-community/netinfo"

export type ConnectionType = "none" | "other" | "vpn" | "wimax" | "ethernet" | "bluetooth" | "wifi" | "cellular" | "unknown"

export interface IConnectionStatus{
    info: NetInfoState | undefined
}