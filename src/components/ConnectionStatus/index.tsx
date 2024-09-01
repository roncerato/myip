import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { connectionStatusStyles as styles } from "./ConnectionStatus.styles";
import { IConnectionType, connectionTypes } from "../../constants/connectionTypes";
import { IConnectionStatus } from "./ConnectionStatus.props";
import ConnectionStatusIndicator from "../ConnectionStatusIndicator";

export default function ConnectionStatus({ type }: IConnectionStatus) {
    const [connectionType, setConnectionType] = useState(() => {
        return connectionTypes.find((connectionType) => connectionType.key === type) as IConnectionType;
    });
    const [wifiSsid, setWifiSsid] = useState<"" | false>()

    useEffect(() => {
        const foundConnectionType = connectionTypes.find((connectionType) => connectionType.key === type) as IConnectionType;
        setConnectionType(foundConnectionType);
    }, [type]);

    return (
        <View style={styles.container}>
            <View style={styles.connectionType}>
                <View style={styles.connectionSVG}>

                    {<connectionType.Icon fill="#fff" />}
                </View>

                <Text style={styles.connectionName}>
                    {connectionType.type}
                </Text>

                <Text style={styles.connectionDetails}>
                    2.4 KHz
                </Text>
            </View>
            <ConnectionStatusIndicator type={connectionType}/>
        </View>
    );
}
