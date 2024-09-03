import { SvgProps } from "react-native-svg"
import { ConnectionType } from "../components/ConnectionStatus/ConnectionStatus.props"
import None from "../../assets/images/svg/connectionType/none.svg"
import Unknown from "../../assets/images/svg/connectionType/unknown.svg"
import Cellular from "../../assets/images/svg/connectionType/cellular.svg"
import Wifi from "../../assets/images/svg/connectionType/wifi.svg"
import Bluetooth from "../../assets/images/svg/connectionType/bluetooth.svg"
import Ethernet from "../../assets/images/svg/connectionType/ethernet.svg"
import WIMax from "../../assets/images/svg/connectionType/wimax.svg"
import Other from "../../assets/images/svg/connectionType/other.svg"

export interface IConnectionType{
    id: number
    type: string
    Icon: React.FC<SvgProps>
    key: ConnectionType
}


export const connectionTypes: IConnectionType[] = [
    {
        id: 1,
        type: "UNKNOWN",
        Icon: Unknown,
        key: "unknown"
    },
    {
        id: 2,
        type: "NONE",
        Icon: None,
        key: "none"
    },
    {
        id: 3,
        type: "Cellular",
        Icon: Cellular,
        key: "cellular"
    },
    {
        id: 4,
        type: "Wi-Fi",
        Icon: Wifi,
        key: "wifi"
    },
    {
        id: 5,
        type: "Bluetooth",
        Icon: Bluetooth,
        key: "bluetooth"
    },
    {
        id: 6,
        type: "Ethernet",
        Icon: Ethernet,
        key: "ethernet"
    },
    {
        id: 7,
        type: "WiMax",
        Icon: WIMax,
        key: "wimax"
    },
    {
        id: 8,
        type: "VPN",
        Icon: Other,
        key: "vpn"
    },
    {
        id: 9,
        type: "Other",
        Icon: Other,
        key: "other"
    }
]