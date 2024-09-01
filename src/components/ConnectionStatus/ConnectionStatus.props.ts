export type ConnectionType = "none" | "other" | "vpn" | "wimax" | "ethernet" | "bluetooth" | "wifi" | "cellular" | "unknown"

export interface IConnectionStatus{
    type: ConnectionType
}