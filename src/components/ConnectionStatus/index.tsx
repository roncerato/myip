import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { connectionStatusStyles as styles } from "./ConnectionStatus.styles";
import { IConnectionType, connectionTypes } from "../../constants/connectionTypes";
import { IConnectionStatus } from "./ConnectionStatus.props";
import ConnectionStatusIndicator from "../ConnectionStatusIndicator";

export default function ConnectionStatus({ info }: IConnectionStatus) {

    const [connectionType, setConnectionType] = useState(connectionTypes[0]);
    const [connectionName, setConnectionName] = useState<string | undefined | null>(undefined)
    const [connectionDetail, setConnectionDetail] = useState<string | undefined>()
    const [connectionIndicator, setConnectionIndicator] = useState<boolean | null>(false)

    useEffect(() => {
        if (info !== undefined) {
            const foundConnectionType = connectionTypes.find((connectionType) => connectionType.key === info?.type) as IConnectionType;
            setConnectionType(foundConnectionType);
            setConnectionIndicator(info.isInternetReachable)
            if (info.type === "wifi") {
                setConnectionName(info.details.ssid)
                setConnectionDetail(`${Number(info.details.frequency! / 1000).toString().slice(0, 3)} GHz`)
            }
            else if (info.type === "cellular") {
                setConnectionName(info.details.carrier)
                setConnectionDetail(info.details.cellularGeneration?.toUpperCase())
            }
            else {
                setConnectionName(undefined)
                setConnectionDetail(undefined)
            }
        }
    }, [info])

    return (
        <View style={styles.container}>
            <View style={styles.connectionType}>
                <View style={styles.connectionSVG}>

                    {<connectionType.Icon fill="#fff" />}
                </View>

                <Text style={styles.connectionName}>
                    {connectionName || connectionType.type}
                </Text>

                <Text style={styles.connectionDetails}>
                    {connectionDetail}
                </Text>
            </View>
            <ConnectionStatusIndicator indicator={connectionIndicator} />
        </View>
    );
}
